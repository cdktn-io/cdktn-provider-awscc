# `dataAwsccApigatewayStage` Submodule <a name="`dataAwsccApigatewayStage` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayStage <a name="DataAwsccApigatewayStage" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_stage awscc_apigateway_stage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

new dataAwsccApigatewayStage.DataAwsccApigatewayStage(scope: Construct, id: string, config: DataAwsccApigatewayStageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig">DataAwsccApigatewayStageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig">DataAwsccApigatewayStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayStage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isConstruct"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

dataAwsccApigatewayStage.DataAwsccApigatewayStage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformElement"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformDataSource"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.generateConfigForImport"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

dataAwsccApigatewayStage.DataAwsccApigatewayStage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccApigatewayStage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApigatewayStage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApigatewayStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.accessLogSetting">accessLogSetting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference">DataAwsccApigatewayStageAccessLogSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.cacheClusterSize">cacheClusterSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.canarySetting">canarySetting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference">DataAwsccApigatewayStageCanarySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.documentationVersion">documentationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.methodSettings">methodSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList">DataAwsccApigatewayStageMethodSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.stageName">stageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList">DataAwsccApigatewayStageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.tracingEnabled">tracingEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.variables">variables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessLogSetting`<sup>Required</sup> <a name="accessLogSetting" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.accessLogSetting"></a>

```typescript
public readonly accessLogSetting: DataAwsccApigatewayStageAccessLogSettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference">DataAwsccApigatewayStageAccessLogSettingOutputReference</a>

---

##### `cacheClusterEnabled`<sup>Required</sup> <a name="cacheClusterEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.cacheClusterEnabled"></a>

```typescript
public readonly cacheClusterEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `cacheClusterSize`<sup>Required</sup> <a name="cacheClusterSize" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.cacheClusterSize"></a>

```typescript
public readonly cacheClusterSize: string;
```

- *Type:* string

---

##### `canarySetting`<sup>Required</sup> <a name="canarySetting" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.canarySetting"></a>

```typescript
public readonly canarySetting: DataAwsccApigatewayStageCanarySettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference">DataAwsccApigatewayStageCanarySettingOutputReference</a>

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `documentationVersion`<sup>Required</sup> <a name="documentationVersion" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.documentationVersion"></a>

```typescript
public readonly documentationVersion: string;
```

- *Type:* string

---

##### `methodSettings`<sup>Required</sup> <a name="methodSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.methodSettings"></a>

```typescript
public readonly methodSettings: DataAwsccApigatewayStageMethodSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList">DataAwsccApigatewayStageMethodSettingsList</a>

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.tags"></a>

```typescript
public readonly tags: DataAwsccApigatewayStageTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList">DataAwsccApigatewayStageTagsList</a>

---

##### `tracingEnabled`<sup>Required</sup> <a name="tracingEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.tracingEnabled"></a>

```typescript
public readonly tracingEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.variables"></a>

```typescript
public readonly variables: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayStageAccessLogSetting <a name="DataAwsccApigatewayStageAccessLogSetting" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSetting.Initializer"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

const dataAwsccApigatewayStageAccessLogSetting: dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSetting = { ... }
```


### DataAwsccApigatewayStageCanarySetting <a name="DataAwsccApigatewayStageCanarySetting" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySetting.Initializer"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

const dataAwsccApigatewayStageCanarySetting: dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySetting = { ... }
```


### DataAwsccApigatewayStageConfig <a name="DataAwsccApigatewayStageConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.Initializer"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

const dataAwsccApigatewayStageConfig: dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_stage#id DataAwsccApigatewayStage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayStageMethodSettings <a name="DataAwsccApigatewayStageMethodSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettings.Initializer"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

const dataAwsccApigatewayStageMethodSettings: dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettings = { ... }
```


### DataAwsccApigatewayStageTags <a name="DataAwsccApigatewayStageTags" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTags.Initializer"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

const dataAwsccApigatewayStageTags: dataAwsccApigatewayStage.DataAwsccApigatewayStageTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayStageAccessLogSettingOutputReference <a name="DataAwsccApigatewayStageAccessLogSettingOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

new dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSetting">DataAwsccApigatewayStageAccessLogSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayStageAccessLogSetting;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSetting">DataAwsccApigatewayStageAccessLogSetting</a>

---


### DataAwsccApigatewayStageCanarySettingOutputReference <a name="DataAwsccApigatewayStageCanarySettingOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

new dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.percentTraffic">percentTraffic</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.useStageCache">useStageCache</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySetting">DataAwsccApigatewayStageCanarySetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `percentTraffic`<sup>Required</sup> <a name="percentTraffic" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.percentTraffic"></a>

```typescript
public readonly percentTraffic: number;
```

- *Type:* number

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="stageVariableOverrides" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.stageVariableOverrides"></a>

```typescript
public readonly stageVariableOverrides: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `useStageCache`<sup>Required</sup> <a name="useStageCache" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.useStageCache"></a>

```typescript
public readonly useStageCache: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayStageCanarySetting;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySetting">DataAwsccApigatewayStageCanarySetting</a>

---


### DataAwsccApigatewayStageMethodSettingsList <a name="DataAwsccApigatewayStageMethodSettingsList" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

new dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.get"></a>

```typescript
public get(index: number): DataAwsccApigatewayStageMethodSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApigatewayStageMethodSettingsOutputReference <a name="DataAwsccApigatewayStageMethodSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

new dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.cachingEnabled">cachingEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.resourcePath">resourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettings">DataAwsccApigatewayStageMethodSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheDataEncrypted`<sup>Required</sup> <a name="cacheDataEncrypted" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.cacheDataEncrypted"></a>

```typescript
public readonly cacheDataEncrypted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `cacheTtlInSeconds`<sup>Required</sup> <a name="cacheTtlInSeconds" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSeconds"></a>

```typescript
public readonly cacheTtlInSeconds: number;
```

- *Type:* number

---

##### `cachingEnabled`<sup>Required</sup> <a name="cachingEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.cachingEnabled"></a>

```typescript
public readonly cachingEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dataTraceEnabled`<sup>Required</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayStageMethodSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettings">DataAwsccApigatewayStageMethodSettings</a>

---


### DataAwsccApigatewayStageTagsList <a name="DataAwsccApigatewayStageTagsList" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

new dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.get"></a>

```typescript
public get(index: number): DataAwsccApigatewayStageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApigatewayStageTagsOutputReference <a name="DataAwsccApigatewayStageTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayStage } from '@cdktn/provider-awscc'

new dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTags">DataAwsccApigatewayStageTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayStageTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTags">DataAwsccApigatewayStageTags</a>

---



