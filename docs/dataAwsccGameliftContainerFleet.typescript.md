# `dataAwsccGameliftContainerFleet` Submodule <a name="`dataAwsccGameliftContainerFleet` Submodule" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGameliftContainerFleet <a name="DataAwsccGameliftContainerFleet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/gamelift_container_fleet awscc_gamelift_container_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet(scope: Construct, id: string, config: DataAwsccGameliftContainerFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig">DataAwsccGameliftContainerFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig">DataAwsccGameliftContainerFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGameliftContainerFleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isConstruct"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformElement"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformDataSource"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.generateConfigForImport"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccGameliftContainerFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGameliftContainerFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGameliftContainerFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/gamelift_container_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGameliftContainerFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.billingType">billingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference">DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.deploymentDetails">deploymentDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference">DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fleetArn">fleetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fleetRoleArn">fleetRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameServerContainerGroupDefinitionArn">gameServerContainerGroupDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameServerContainerGroupDefinitionName">gameServerContainerGroupDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameServerContainerGroupsPerInstance">gameServerContainerGroupsPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameSessionCreationLimitPolicy">gameSessionCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference">DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.instanceConnectionPortRange">instanceConnectionPortRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference">DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.instanceInboundPermissions">instanceInboundPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList">DataAwsccGameliftContainerFleetInstanceInboundPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.locations">locations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList">DataAwsccGameliftContainerFleetLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference">DataAwsccGameliftContainerFleetLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.maximumGameServerContainerGroupsPerInstance">maximumGameServerContainerGroupsPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.metricGroups">metricGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.newGameSessionProtectionPolicy">newGameSessionProtectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.perInstanceContainerGroupDefinitionArn">perInstanceContainerGroupDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.perInstanceContainerGroupDefinitionName">perInstanceContainerGroupDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.playerGatewayMode">playerGatewayMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.scalingPolicies">scalingPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList">DataAwsccGameliftContainerFleetScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList">DataAwsccGameliftContainerFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.billingType"></a>

```typescript
public readonly billingType: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.deploymentConfiguration"></a>

```typescript
public readonly deploymentConfiguration: DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference">DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference</a>

---

##### `deploymentDetails`<sup>Required</sup> <a name="deploymentDetails" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.deploymentDetails"></a>

```typescript
public readonly deploymentDetails: DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference">DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fleetArn`<sup>Required</sup> <a name="fleetArn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fleetArn"></a>

```typescript
public readonly fleetArn: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `fleetRoleArn`<sup>Required</sup> <a name="fleetRoleArn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.fleetRoleArn"></a>

```typescript
public readonly fleetRoleArn: string;
```

- *Type:* string

---

##### `gameServerContainerGroupDefinitionArn`<sup>Required</sup> <a name="gameServerContainerGroupDefinitionArn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameServerContainerGroupDefinitionArn"></a>

```typescript
public readonly gameServerContainerGroupDefinitionArn: string;
```

- *Type:* string

---

##### `gameServerContainerGroupDefinitionName`<sup>Required</sup> <a name="gameServerContainerGroupDefinitionName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameServerContainerGroupDefinitionName"></a>

```typescript
public readonly gameServerContainerGroupDefinitionName: string;
```

- *Type:* string

---

##### `gameServerContainerGroupsPerInstance`<sup>Required</sup> <a name="gameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameServerContainerGroupsPerInstance"></a>

```typescript
public readonly gameServerContainerGroupsPerInstance: number;
```

- *Type:* number

---

##### `gameSessionCreationLimitPolicy`<sup>Required</sup> <a name="gameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.gameSessionCreationLimitPolicy"></a>

```typescript
public readonly gameSessionCreationLimitPolicy: DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference">DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference</a>

---

##### `instanceConnectionPortRange`<sup>Required</sup> <a name="instanceConnectionPortRange" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.instanceConnectionPortRange"></a>

```typescript
public readonly instanceConnectionPortRange: DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference">DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference</a>

---

##### `instanceInboundPermissions`<sup>Required</sup> <a name="instanceInboundPermissions" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.instanceInboundPermissions"></a>

```typescript
public readonly instanceInboundPermissions: DataAwsccGameliftContainerFleetInstanceInboundPermissionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList">DataAwsccGameliftContainerFleetInstanceInboundPermissionsList</a>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.locations"></a>

```typescript
public readonly locations: DataAwsccGameliftContainerFleetLocationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList">DataAwsccGameliftContainerFleetLocationsList</a>

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: DataAwsccGameliftContainerFleetLogConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference">DataAwsccGameliftContainerFleetLogConfigurationOutputReference</a>

---

##### `maximumGameServerContainerGroupsPerInstance`<sup>Required</sup> <a name="maximumGameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.maximumGameServerContainerGroupsPerInstance"></a>

```typescript
public readonly maximumGameServerContainerGroupsPerInstance: number;
```

- *Type:* number

---

##### `metricGroups`<sup>Required</sup> <a name="metricGroups" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.metricGroups"></a>

```typescript
public readonly metricGroups: string[];
```

- *Type:* string[]

---

##### `newGameSessionProtectionPolicy`<sup>Required</sup> <a name="newGameSessionProtectionPolicy" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.newGameSessionProtectionPolicy"></a>

```typescript
public readonly newGameSessionProtectionPolicy: string;
```

- *Type:* string

---

##### `perInstanceContainerGroupDefinitionArn`<sup>Required</sup> <a name="perInstanceContainerGroupDefinitionArn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.perInstanceContainerGroupDefinitionArn"></a>

```typescript
public readonly perInstanceContainerGroupDefinitionArn: string;
```

- *Type:* string

---

##### `perInstanceContainerGroupDefinitionName`<sup>Required</sup> <a name="perInstanceContainerGroupDefinitionName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.perInstanceContainerGroupDefinitionName"></a>

```typescript
public readonly perInstanceContainerGroupDefinitionName: string;
```

- *Type:* string

---

##### `playerGatewayMode`<sup>Required</sup> <a name="playerGatewayMode" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.playerGatewayMode"></a>

```typescript
public readonly playerGatewayMode: string;
```

- *Type:* string

---

##### `scalingPolicies`<sup>Required</sup> <a name="scalingPolicies" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.scalingPolicies"></a>

```typescript
public readonly scalingPolicies: DataAwsccGameliftContainerFleetScalingPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList">DataAwsccGameliftContainerFleetScalingPoliciesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.tags"></a>

```typescript
public readonly tags: DataAwsccGameliftContainerFleetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList">DataAwsccGameliftContainerFleetTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGameliftContainerFleetConfig <a name="DataAwsccGameliftContainerFleetConfig" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

const dataAwsccGameliftContainerFleetConfig: dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/gamelift_container_fleet#id DataAwsccGameliftContainerFleet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGameliftContainerFleetDeploymentConfiguration <a name="DataAwsccGameliftContainerFleetDeploymentConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfiguration.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

const dataAwsccGameliftContainerFleetDeploymentConfiguration: dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfiguration = { ... }
```


### DataAwsccGameliftContainerFleetDeploymentDetails <a name="DataAwsccGameliftContainerFleetDeploymentDetails" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetails.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

const dataAwsccGameliftContainerFleetDeploymentDetails: dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetails = { ... }
```


### DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy <a name="DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

const dataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy: dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy = { ... }
```


### DataAwsccGameliftContainerFleetInstanceConnectionPortRange <a name="DataAwsccGameliftContainerFleetInstanceConnectionPortRange" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRange.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

const dataAwsccGameliftContainerFleetInstanceConnectionPortRange: dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRange = { ... }
```


### DataAwsccGameliftContainerFleetInstanceInboundPermissions <a name="DataAwsccGameliftContainerFleetInstanceInboundPermissions" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissions.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

const dataAwsccGameliftContainerFleetInstanceInboundPermissions: dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissions = { ... }
```


### DataAwsccGameliftContainerFleetLocations <a name="DataAwsccGameliftContainerFleetLocations" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocations.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

const dataAwsccGameliftContainerFleetLocations: dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocations = { ... }
```


### DataAwsccGameliftContainerFleetLocationsLocationCapacity <a name="DataAwsccGameliftContainerFleetLocationsLocationCapacity" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacity.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

const dataAwsccGameliftContainerFleetLocationsLocationCapacity: dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacity = { ... }
```


### DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration <a name="DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

const dataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration: dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration = { ... }
```


### DataAwsccGameliftContainerFleetLogConfiguration <a name="DataAwsccGameliftContainerFleetLogConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfiguration.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

const dataAwsccGameliftContainerFleetLogConfiguration: dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfiguration = { ... }
```


### DataAwsccGameliftContainerFleetScalingPolicies <a name="DataAwsccGameliftContainerFleetScalingPolicies" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPolicies.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

const dataAwsccGameliftContainerFleetScalingPolicies: dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPolicies = { ... }
```


### DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration <a name="DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

const dataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration: dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration = { ... }
```


### DataAwsccGameliftContainerFleetTags <a name="DataAwsccGameliftContainerFleetTags" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTags.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

const dataAwsccGameliftContainerFleetTags: dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference <a name="DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategy">impairmentStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentage">minimumHealthyPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategy">protectionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfiguration">DataAwsccGameliftContainerFleetDeploymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `impairmentStrategy`<sup>Required</sup> <a name="impairmentStrategy" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategy"></a>

```typescript
public readonly impairmentStrategy: string;
```

- *Type:* string

---

##### `minimumHealthyPercentage`<sup>Required</sup> <a name="minimumHealthyPercentage" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentage"></a>

```typescript
public readonly minimumHealthyPercentage: number;
```

- *Type:* number

---

##### `protectionStrategy`<sup>Required</sup> <a name="protectionStrategy" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategy"></a>

```typescript
public readonly protectionStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftContainerFleetDeploymentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentConfiguration">DataAwsccGameliftContainerFleetDeploymentConfiguration</a>

---


### DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference <a name="DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.latestDeploymentId">latestDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetails">DataAwsccGameliftContainerFleetDeploymentDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latestDeploymentId`<sup>Required</sup> <a name="latestDeploymentId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.latestDeploymentId"></a>

```typescript
public readonly latestDeploymentId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftContainerFleetDeploymentDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetDeploymentDetails">DataAwsccGameliftContainerFleetDeploymentDetails</a>

---


### DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference <a name="DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">newGameSessionsPerCreator</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">policyPeriodInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy">DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `newGameSessionsPerCreator`<sup>Required</sup> <a name="newGameSessionsPerCreator" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```typescript
public readonly newGameSessionsPerCreator: number;
```

- *Type:* number

---

##### `policyPeriodInMinutes`<sup>Required</sup> <a name="policyPeriodInMinutes" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```typescript
public readonly policyPeriodInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy">DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy</a>

---


### DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference <a name="DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRange">DataAwsccGameliftContainerFleetInstanceConnectionPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftContainerFleetInstanceConnectionPortRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceConnectionPortRange">DataAwsccGameliftContainerFleetInstanceConnectionPortRange</a>

---


### DataAwsccGameliftContainerFleetInstanceInboundPermissionsList <a name="DataAwsccGameliftContainerFleetInstanceInboundPermissionsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.get"></a>

```typescript
public get(index: number): DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference <a name="DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRange">ipRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissions">DataAwsccGameliftContainerFleetInstanceInboundPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftContainerFleetInstanceInboundPermissions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetInstanceInboundPermissions">DataAwsccGameliftContainerFleetInstanceInboundPermissions</a>

---


### DataAwsccGameliftContainerFleetLocationsList <a name="DataAwsccGameliftContainerFleetLocationsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.get"></a>

```typescript
public get(index: number): DataAwsccGameliftContainerFleetLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference <a name="DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes">scaleInAfterInactivityMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy">zeroCapacityStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleInAfterInactivityMinutes`<sup>Required</sup> <a name="scaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes"></a>

```typescript
public readonly scaleInAfterInactivityMinutes: number;
```

- *Type:* number

---

##### `zeroCapacityStrategy`<sup>Required</sup> <a name="zeroCapacityStrategy" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy"></a>

```typescript
public readonly zeroCapacityStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---


### DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference <a name="DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances">desiredEc2Instances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration">managedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacity">DataAwsccGameliftContainerFleetLocationsLocationCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `desiredEc2Instances`<sup>Required</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances"></a>

```typescript
public readonly desiredEc2Instances: number;
```

- *Type:* number

---

##### `managedCapacityConfiguration`<sup>Required</sup> <a name="managedCapacityConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration"></a>

```typescript
public readonly managedCapacityConfiguration: DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a>

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftContainerFleetLocationsLocationCapacity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacity">DataAwsccGameliftContainerFleetLocationsLocationCapacity</a>

---


### DataAwsccGameliftContainerFleetLocationsOutputReference <a name="DataAwsccGameliftContainerFleetLocationsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.locationCapacity">locationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference">DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.playerGatewayStatus">playerGatewayStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.stoppedActions">stoppedActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocations">DataAwsccGameliftContainerFleetLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `locationCapacity`<sup>Required</sup> <a name="locationCapacity" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.locationCapacity"></a>

```typescript
public readonly locationCapacity: DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference">DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference</a>

---

##### `playerGatewayStatus`<sup>Required</sup> <a name="playerGatewayStatus" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.playerGatewayStatus"></a>

```typescript
public readonly playerGatewayStatus: string;
```

- *Type:* string

---

##### `stoppedActions`<sup>Required</sup> <a name="stoppedActions" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.stoppedActions"></a>

```typescript
public readonly stoppedActions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftContainerFleetLocations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLocations">DataAwsccGameliftContainerFleetLocations</a>

---


### DataAwsccGameliftContainerFleetLogConfigurationOutputReference <a name="DataAwsccGameliftContainerFleetLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.logDestination">logDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfiguration">DataAwsccGameliftContainerFleetLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftContainerFleetLogConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetLogConfiguration">DataAwsccGameliftContainerFleetLogConfiguration</a>

---


### DataAwsccGameliftContainerFleetScalingPoliciesList <a name="DataAwsccGameliftContainerFleetScalingPoliciesList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.get"></a>

```typescript
public get(index: number): DataAwsccGameliftContainerFleetScalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGameliftContainerFleetScalingPoliciesOutputReference <a name="DataAwsccGameliftContainerFleetScalingPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustment">scalingAdjustment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentType">scalingAdjustmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference">DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPolicies">DataAwsccGameliftContainerFleetScalingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `scalingAdjustment`<sup>Required</sup> <a name="scalingAdjustment" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustment"></a>

```typescript
public readonly scalingAdjustment: number;
```

- *Type:* number

---

##### `scalingAdjustmentType`<sup>Required</sup> <a name="scalingAdjustmentType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentType"></a>

```typescript
public readonly scalingAdjustmentType: string;
```

- *Type:* string

---

##### `targetConfiguration`<sup>Required</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.targetConfiguration"></a>

```typescript
public readonly targetConfiguration: DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference">DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference</a>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftContainerFleetScalingPolicies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPolicies">DataAwsccGameliftContainerFleetScalingPolicies</a>

---


### DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference <a name="DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration">DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration">DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration</a>

---


### DataAwsccGameliftContainerFleetTagsList <a name="DataAwsccGameliftContainerFleetTagsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.get"></a>

```typescript
public get(index: number): DataAwsccGameliftContainerFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGameliftContainerFleetTagsOutputReference <a name="DataAwsccGameliftContainerFleetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccGameliftContainerFleet } from '@cdktn/provider-awscc'

new dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTags">DataAwsccGameliftContainerFleetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGameliftContainerFleetTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerFleet.DataAwsccGameliftContainerFleetTags">DataAwsccGameliftContainerFleetTags</a>

---



