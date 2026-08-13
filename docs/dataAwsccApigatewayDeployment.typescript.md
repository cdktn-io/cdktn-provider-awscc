# `dataAwsccApigatewayDeployment` Submodule <a name="`dataAwsccApigatewayDeployment` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayDeployment <a name="DataAwsccApigatewayDeployment" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigateway_deployment awscc_apigateway_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

new dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment(scope: Construct, id: string, config: DataAwsccApigatewayDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig">DataAwsccApigatewayDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig">DataAwsccApigatewayDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isConstruct"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformElement"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformDataSource"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.generateConfigForImport"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccApigatewayDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApigatewayDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApigatewayDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigateway_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.deploymentCanarySettings">deploymentCanarySettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference">DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.stageDescription">stageDescription</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference">DataAwsccApigatewayDeploymentStageDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.stageName">stageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `deploymentCanarySettings`<sup>Required</sup> <a name="deploymentCanarySettings" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.deploymentCanarySettings"></a>

```typescript
public readonly deploymentCanarySettings: DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference">DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference</a>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `stageDescription`<sup>Required</sup> <a name="stageDescription" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.stageDescription"></a>

```typescript
public readonly stageDescription: DataAwsccApigatewayDeploymentStageDescriptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference">DataAwsccApigatewayDeploymentStageDescriptionOutputReference</a>

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayDeploymentConfig <a name="DataAwsccApigatewayDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

const dataAwsccApigatewayDeploymentConfig: dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigateway_deployment#id DataAwsccApigatewayDeployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayDeploymentDeploymentCanarySettings <a name="DataAwsccApigatewayDeploymentDeploymentCanarySettings" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettings.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

const dataAwsccApigatewayDeploymentDeploymentCanarySettings: dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettings = { ... }
```


### DataAwsccApigatewayDeploymentStageDescription <a name="DataAwsccApigatewayDeploymentStageDescription" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescription.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

const dataAwsccApigatewayDeploymentStageDescription: dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescription = { ... }
```


### DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting <a name="DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

const dataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting: dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting = { ... }
```


### DataAwsccApigatewayDeploymentStageDescriptionCanarySetting <a name="DataAwsccApigatewayDeploymentStageDescriptionCanarySetting" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySetting.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

const dataAwsccApigatewayDeploymentStageDescriptionCanarySetting: dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySetting = { ... }
```


### DataAwsccApigatewayDeploymentStageDescriptionMethodSettings <a name="DataAwsccApigatewayDeploymentStageDescriptionMethodSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettings.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

const dataAwsccApigatewayDeploymentStageDescriptionMethodSettings: dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettings = { ... }
```


### DataAwsccApigatewayDeploymentStageDescriptionTags <a name="DataAwsccApigatewayDeploymentStageDescriptionTags" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTags.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

const dataAwsccApigatewayDeploymentStageDescriptionTags: dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference <a name="DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

new dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTraffic">percentTraffic</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCache">useStageCache</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettings">DataAwsccApigatewayDeploymentDeploymentCanarySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentTraffic`<sup>Required</sup> <a name="percentTraffic" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTraffic"></a>

```typescript
public readonly percentTraffic: number;
```

- *Type:* number

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="stageVariableOverrides" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverrides"></a>

```typescript
public readonly stageVariableOverrides: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `useStageCache`<sup>Required</sup> <a name="useStageCache" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCache"></a>

```typescript
public readonly useStageCache: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayDeploymentDeploymentCanarySettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentDeploymentCanarySettings">DataAwsccApigatewayDeploymentDeploymentCanarySettings</a>

---


### DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference <a name="DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

new dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting">DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting">DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting</a>

---


### DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference <a name="DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

new dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTraffic">percentTraffic</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCache">useStageCache</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySetting">DataAwsccApigatewayDeploymentStageDescriptionCanarySetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentTraffic`<sup>Required</sup> <a name="percentTraffic" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTraffic"></a>

```typescript
public readonly percentTraffic: number;
```

- *Type:* number

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="stageVariableOverrides" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverrides"></a>

```typescript
public readonly stageVariableOverrides: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `useStageCache`<sup>Required</sup> <a name="useStageCache" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCache"></a>

```typescript
public readonly useStageCache: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayDeploymentStageDescriptionCanarySetting;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySetting">DataAwsccApigatewayDeploymentStageDescriptionCanarySetting</a>

---


### DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList <a name="DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

new dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.get"></a>

```typescript
public get(index: number): DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference <a name="DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

new dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabled">cachingEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePath">resourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettings">DataAwsccApigatewayDeploymentStageDescriptionMethodSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheDataEncrypted`<sup>Required</sup> <a name="cacheDataEncrypted" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncrypted"></a>

```typescript
public readonly cacheDataEncrypted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `cacheTtlInSeconds`<sup>Required</sup> <a name="cacheTtlInSeconds" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSeconds"></a>

```typescript
public readonly cacheTtlInSeconds: number;
```

- *Type:* number

---

##### `cachingEnabled`<sup>Required</sup> <a name="cachingEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabled"></a>

```typescript
public readonly cachingEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dataTraceEnabled`<sup>Required</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayDeploymentStageDescriptionMethodSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettings">DataAwsccApigatewayDeploymentStageDescriptionMethodSettings</a>

---


### DataAwsccApigatewayDeploymentStageDescriptionOutputReference <a name="DataAwsccApigatewayDeploymentStageDescriptionOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

new dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSetting">accessLogSetting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference">DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSize">cacheClusterSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabled">cachingEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.canarySetting">canarySetting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference">DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersion">documentationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.methodSettings">methodSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList">DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList">DataAwsccApigatewayDeploymentStageDescriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabled">tracingEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.variables">variables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescription">DataAwsccApigatewayDeploymentStageDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLogSetting`<sup>Required</sup> <a name="accessLogSetting" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSetting"></a>

```typescript
public readonly accessLogSetting: DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference">DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference</a>

---

##### `cacheClusterEnabled`<sup>Required</sup> <a name="cacheClusterEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabled"></a>

```typescript
public readonly cacheClusterEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `cacheClusterSize`<sup>Required</sup> <a name="cacheClusterSize" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSize"></a>

```typescript
public readonly cacheClusterSize: string;
```

- *Type:* string

---

##### `cacheDataEncrypted`<sup>Required</sup> <a name="cacheDataEncrypted" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncrypted"></a>

```typescript
public readonly cacheDataEncrypted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `cacheTtlInSeconds`<sup>Required</sup> <a name="cacheTtlInSeconds" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSeconds"></a>

```typescript
public readonly cacheTtlInSeconds: number;
```

- *Type:* number

---

##### `cachingEnabled`<sup>Required</sup> <a name="cachingEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabled"></a>

```typescript
public readonly cachingEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `canarySetting`<sup>Required</sup> <a name="canarySetting" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.canarySetting"></a>

```typescript
public readonly canarySetting: DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference">DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference</a>

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

---

##### `dataTraceEnabled`<sup>Required</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `documentationVersion`<sup>Required</sup> <a name="documentationVersion" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersion"></a>

```typescript
public readonly documentationVersion: string;
```

- *Type:* string

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `methodSettings`<sup>Required</sup> <a name="methodSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.methodSettings"></a>

```typescript
public readonly methodSettings: DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList">DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList</a>

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsccApigatewayDeploymentStageDescriptionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList">DataAwsccApigatewayDeploymentStageDescriptionTagsList</a>

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

---

##### `tracingEnabled`<sup>Required</sup> <a name="tracingEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabled"></a>

```typescript
public readonly tracingEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.variables"></a>

```typescript
public readonly variables: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayDeploymentStageDescription;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescription">DataAwsccApigatewayDeploymentStageDescription</a>

---


### DataAwsccApigatewayDeploymentStageDescriptionTagsList <a name="DataAwsccApigatewayDeploymentStageDescriptionTagsList" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

new dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference <a name="DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayDeployment } from '@cdktn/provider-awscc'

new dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTags">DataAwsccApigatewayDeploymentStageDescriptionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayDeploymentStageDescriptionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDeployment.DataAwsccApigatewayDeploymentStageDescriptionTags">DataAwsccApigatewayDeploymentStageDescriptionTags</a>

---



