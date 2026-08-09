# `dataAwsccAppconfigDeploymentStrategy` Submodule <a name="`dataAwsccAppconfigDeploymentStrategy` Submodule" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppconfigDeploymentStrategy <a name="DataAwsccAppconfigDeploymentStrategy" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appconfig_deployment_strategy awscc_appconfig_deployment_strategy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer"></a>

```typescript
import { dataAwsccAppconfigDeploymentStrategy } from '@cdktn/provider-awscc'

new dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy(scope: Construct, id: string, config: DataAwsccAppconfigDeploymentStrategyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig">DataAwsccAppconfigDeploymentStrategyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig">DataAwsccAppconfigDeploymentStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppconfigDeploymentStrategy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isConstruct"></a>

```typescript
import { dataAwsccAppconfigDeploymentStrategy } from '@cdktn/provider-awscc'

dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformElement"></a>

```typescript
import { dataAwsccAppconfigDeploymentStrategy } from '@cdktn/provider-awscc'

dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformDataSource"></a>

```typescript
import { dataAwsccAppconfigDeploymentStrategy } from '@cdktn/provider-awscc'

dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.generateConfigForImport"></a>

```typescript
import { dataAwsccAppconfigDeploymentStrategy } from '@cdktn/provider-awscc'

dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAppconfigDeploymentStrategy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppconfigDeploymentStrategy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppconfigDeploymentStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appconfig_deployment_strategy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppconfigDeploymentStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.deploymentDurationInMinutes">deploymentDurationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.deploymentStrategyId">deploymentStrategyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.finalBakeTimeInMinutes">finalBakeTimeInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.growthFactor">growthFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.growthType">growthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.replicateTo">replicateTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList">DataAwsccAppconfigDeploymentStrategyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `deploymentDurationInMinutes`<sup>Required</sup> <a name="deploymentDurationInMinutes" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.deploymentDurationInMinutes"></a>

```typescript
public readonly deploymentDurationInMinutes: number;
```

- *Type:* number

---

##### `deploymentStrategyId`<sup>Required</sup> <a name="deploymentStrategyId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.deploymentStrategyId"></a>

```typescript
public readonly deploymentStrategyId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `finalBakeTimeInMinutes`<sup>Required</sup> <a name="finalBakeTimeInMinutes" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.finalBakeTimeInMinutes"></a>

```typescript
public readonly finalBakeTimeInMinutes: number;
```

- *Type:* number

---

##### `growthFactor`<sup>Required</sup> <a name="growthFactor" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.growthFactor"></a>

```typescript
public readonly growthFactor: number;
```

- *Type:* number

---

##### `growthType`<sup>Required</sup> <a name="growthType" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.growthType"></a>

```typescript
public readonly growthType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `replicateTo`<sup>Required</sup> <a name="replicateTo" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.replicateTo"></a>

```typescript
public readonly replicateTo: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.tags"></a>

```typescript
public readonly tags: DataAwsccAppconfigDeploymentStrategyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList">DataAwsccAppconfigDeploymentStrategyTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppconfigDeploymentStrategyConfig <a name="DataAwsccAppconfigDeploymentStrategyConfig" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.Initializer"></a>

```typescript
import { dataAwsccAppconfigDeploymentStrategy } from '@cdktn/provider-awscc'

const dataAwsccAppconfigDeploymentStrategyConfig: dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appconfig_deployment_strategy#id DataAwsccAppconfigDeploymentStrategy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppconfigDeploymentStrategyTags <a name="DataAwsccAppconfigDeploymentStrategyTags" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTags.Initializer"></a>

```typescript
import { dataAwsccAppconfigDeploymentStrategy } from '@cdktn/provider-awscc'

const dataAwsccAppconfigDeploymentStrategyTags: dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppconfigDeploymentStrategyTagsList <a name="DataAwsccAppconfigDeploymentStrategyTagsList" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer"></a>

```typescript
import { dataAwsccAppconfigDeploymentStrategy } from '@cdktn/provider-awscc'

new dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAppconfigDeploymentStrategyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAppconfigDeploymentStrategyTagsOutputReference <a name="DataAwsccAppconfigDeploymentStrategyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppconfigDeploymentStrategy } from '@cdktn/provider-awscc'

new dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTags">DataAwsccAppconfigDeploymentStrategyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppconfigDeploymentStrategyTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTags">DataAwsccAppconfigDeploymentStrategyTags</a>

---



