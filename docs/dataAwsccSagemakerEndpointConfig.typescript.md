# `dataAwsccSagemakerEndpointConfig` Submodule <a name="`dataAwsccSagemakerEndpointConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerEndpointConfigA <a name="DataAwsccSagemakerEndpointConfigA" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config awscc_sagemaker_endpoint_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA(scope: Construct, id: string, config: DataAwsccSagemakerEndpointConfigAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig">DataAwsccSagemakerEndpointConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig">DataAwsccSagemakerEndpointConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerEndpointConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isConstruct"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerEndpointConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerEndpointConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerEndpointConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerEndpointConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.asyncInferenceConfig">asyncInferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.dataCaptureConfig">dataCaptureConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference">DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.enableNetworkIsolation">enableNetworkIsolation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.endpointConfigArn">endpointConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.endpointConfigName">endpointConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.explainerConfig">explainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.metricsConfig">metricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference">DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.productionVariants">productionVariants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList">DataAwsccSagemakerEndpointConfigProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.shadowProductionVariants">shadowProductionVariants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList">DataAwsccSagemakerEndpointConfigShadowProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList">DataAwsccSagemakerEndpointConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference">DataAwsccSagemakerEndpointConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `asyncInferenceConfig`<sup>Required</sup> <a name="asyncInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.asyncInferenceConfig"></a>

```typescript
public readonly asyncInferenceConfig: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference</a>

---

##### `dataCaptureConfig`<sup>Required</sup> <a name="dataCaptureConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.dataCaptureConfig"></a>

```typescript
public readonly dataCaptureConfig: DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference">DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference</a>

---

##### `enableNetworkIsolation`<sup>Required</sup> <a name="enableNetworkIsolation" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.enableNetworkIsolation"></a>

```typescript
public readonly enableNetworkIsolation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endpointConfigArn`<sup>Required</sup> <a name="endpointConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.endpointConfigArn"></a>

```typescript
public readonly endpointConfigArn: string;
```

- *Type:* string

---

##### `endpointConfigName`<sup>Required</sup> <a name="endpointConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.endpointConfigName"></a>

```typescript
public readonly endpointConfigName: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `explainerConfig`<sup>Required</sup> <a name="explainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.explainerConfig"></a>

```typescript
public readonly explainerConfig: DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference</a>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `metricsConfig`<sup>Required</sup> <a name="metricsConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.metricsConfig"></a>

```typescript
public readonly metricsConfig: DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference">DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference</a>

---

##### `productionVariants`<sup>Required</sup> <a name="productionVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.productionVariants"></a>

```typescript
public readonly productionVariants: DataAwsccSagemakerEndpointConfigProductionVariantsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList">DataAwsccSagemakerEndpointConfigProductionVariantsList</a>

---

##### `shadowProductionVariants`<sup>Required</sup> <a name="shadowProductionVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.shadowProductionVariants"></a>

```typescript
public readonly shadowProductionVariants: DataAwsccSagemakerEndpointConfigShadowProductionVariantsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList">DataAwsccSagemakerEndpointConfigShadowProductionVariantsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerEndpointConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList">DataAwsccSagemakerEndpointConfigTagsList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: DataAwsccSagemakerEndpointConfigVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference">DataAwsccSagemakerEndpointConfigVpcConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerEndpointConfigAConfig <a name="DataAwsccSagemakerEndpointConfigAConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigAConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sagemaker_endpoint_config#id DataAwsccSagemakerEndpointConfigA#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerEndpointConfigAsyncInferenceConfig <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigAsyncInferenceConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigDataCaptureConfig <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigDataCaptureConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader = { ... }
```


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions = { ... }
```


### DataAwsccSagemakerEndpointConfigExplainerConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigExplainerConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigMetricsConfig <a name="DataAwsccSagemakerEndpointConfigMetricsConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigMetricsConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigProductionVariants <a name="DataAwsccSagemakerEndpointConfigProductionVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigProductionVariants: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants = { ... }
```


### DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools <a name="DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigProductionVariantsInstancePools: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools = { ... }
```


### DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling <a name="DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling = { ... }
```


### DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy <a name="DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy = { ... }
```


### DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig <a name="DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariants <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariants" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigShadowProductionVariants: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants = { ... }
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools = { ... }
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling = { ... }
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy = { ... }
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig = { ... }
```


### DataAwsccSagemakerEndpointConfigTags <a name="DataAwsccSagemakerEndpointConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigTags: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags = { ... }
```


### DataAwsccSagemakerEndpointConfigVpcConfig <a name="DataAwsccSagemakerEndpointConfigVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfigVpcConfig: dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance">maxConcurrentInvocationsPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxConcurrentInvocationsPerInstance`<sup>Required</sup> <a name="maxConcurrentInvocationsPerInstance" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance"></a>

```typescript
public readonly maxConcurrentInvocationsPerInstance: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfig</a>

---


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic">errorTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.includeInferenceResponseIn">includeInferenceResponseIn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic">successTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorTopic`<sup>Required</sup> <a name="errorTopic" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic"></a>

```typescript
public readonly errorTopic: string;
```

- *Type:* string

---

##### `includeInferenceResponseIn`<sup>Required</sup> <a name="includeInferenceResponseIn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.includeInferenceResponseIn"></a>

```typescript
public readonly includeInferenceResponseIn: string[];
```

- *Type:* string[]

---

##### `successTopic`<sup>Required</sup> <a name="successTopic" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic"></a>

```typescript
public readonly successTopic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfig</a>

---


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath">s3FailurePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a>

---

##### `s3FailurePath`<sup>Required</sup> <a name="s3FailurePath" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath"></a>

```typescript
public readonly s3FailurePath: string;
```

- *Type:* string

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath"></a>

```typescript
public readonly s3OutputPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfig</a>

---


### DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.clientConfig">clientConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientConfig`<sup>Required</sup> <a name="clientConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.clientConfig"></a>

```typescript
public readonly clientConfig: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigClientConfigOutputReference</a>

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.outputConfig"></a>

```typescript
public readonly outputConfig: DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference">DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigAsyncInferenceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigAsyncInferenceConfig">DataAwsccSagemakerEndpointConfigAsyncInferenceConfig</a>

---


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes">csvContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes">jsonContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csvContentTypes`<sup>Required</sup> <a name="csvContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes"></a>

```typescript
public readonly csvContentTypes: string[];
```

- *Type:* string[]

---

##### `jsonContentTypes`<sup>Required</sup> <a name="jsonContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes"></a>

```typescript
public readonly jsonContentTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeader</a>

---


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.captureMode">captureMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `captureMode`<sup>Required</sup> <a name="captureMode" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.captureMode"></a>

```typescript
public readonly captureMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptions</a>

---


### DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureContentTypeHeader">captureContentTypeHeader</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureOptions">captureOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.destinationS3Uri">destinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.enableCapture">enableCapture</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.initialSamplingPercentage">initialSamplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig">DataAwsccSagemakerEndpointConfigDataCaptureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `captureContentTypeHeader`<sup>Required</sup> <a name="captureContentTypeHeader" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureContentTypeHeader"></a>

```typescript
public readonly captureContentTypeHeader: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureContentTypeHeaderOutputReference</a>

---

##### `captureOptions`<sup>Required</sup> <a name="captureOptions" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.captureOptions"></a>

```typescript
public readonly captureOptions: DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList">DataAwsccSagemakerEndpointConfigDataCaptureConfigCaptureOptionsList</a>

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.destinationS3Uri"></a>

```typescript
public readonly destinationS3Uri: string;
```

- *Type:* string

---

##### `enableCapture`<sup>Required</sup> <a name="enableCapture" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.enableCapture"></a>

```typescript
public readonly enableCapture: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `initialSamplingPercentage`<sup>Required</sup> <a name="initialSamplingPercentage" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.initialSamplingPercentage"></a>

```typescript
public readonly initialSamplingPercentage: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigDataCaptureConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigDataCaptureConfig">DataAwsccSagemakerEndpointConfigDataCaptureConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.contentTemplate">contentTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureHeaders">featureHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featuresAttribute">featuresAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureTypes">featureTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelAttribute">labelAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelHeaders">labelHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelIndex">labelIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxPayloadInMb">maxPayloadInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxRecordCount">maxRecordCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityAttribute">probabilityAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityIndex">probabilityIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTemplate`<sup>Required</sup> <a name="contentTemplate" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.contentTemplate"></a>

```typescript
public readonly contentTemplate: string;
```

- *Type:* string

---

##### `featureHeaders`<sup>Required</sup> <a name="featureHeaders" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureHeaders"></a>

```typescript
public readonly featureHeaders: string[];
```

- *Type:* string[]

---

##### `featuresAttribute`<sup>Required</sup> <a name="featuresAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featuresAttribute"></a>

```typescript
public readonly featuresAttribute: string;
```

- *Type:* string

---

##### `featureTypes`<sup>Required</sup> <a name="featureTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.featureTypes"></a>

```typescript
public readonly featureTypes: string[];
```

- *Type:* string[]

---

##### `labelAttribute`<sup>Required</sup> <a name="labelAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelAttribute"></a>

```typescript
public readonly labelAttribute: string;
```

- *Type:* string

---

##### `labelHeaders`<sup>Required</sup> <a name="labelHeaders" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelHeaders"></a>

```typescript
public readonly labelHeaders: string[];
```

- *Type:* string[]

---

##### `labelIndex`<sup>Required</sup> <a name="labelIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.labelIndex"></a>

```typescript
public readonly labelIndex: number;
```

- *Type:* number

---

##### `maxPayloadInMb`<sup>Required</sup> <a name="maxPayloadInMb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxPayloadInMb"></a>

```typescript
public readonly maxPayloadInMb: number;
```

- *Type:* number

---

##### `maxRecordCount`<sup>Required</sup> <a name="maxRecordCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.maxRecordCount"></a>

```typescript
public readonly maxRecordCount: number;
```

- *Type:* number

---

##### `probabilityAttribute`<sup>Required</sup> <a name="probabilityAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityAttribute"></a>

```typescript
public readonly probabilityAttribute: string;
```

- *Type:* string

---

##### `probabilityIndex`<sup>Required</sup> <a name="probabilityIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.probabilityIndex"></a>

```typescript
public readonly probabilityIndex: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.enableExplanations">enableExplanations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.inferenceConfig">inferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.shapConfig">shapConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableExplanations`<sup>Required</sup> <a name="enableExplanations" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.enableExplanations"></a>

```typescript
public readonly enableExplanations: string;
```

- *Type:* string

---

##### `inferenceConfig`<sup>Required</sup> <a name="inferenceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.inferenceConfig"></a>

```typescript
public readonly inferenceConfig: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigInferenceConfigOutputReference</a>

---

##### `shapConfig`<sup>Required</sup> <a name="shapConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.shapConfig"></a>

```typescript
public readonly shapConfig: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.numberOfSamples">numberOfSamples</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.seed">seed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.shapBaselineConfig">shapBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.textConfig">textConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.useLogit">useLogit</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberOfSamples`<sup>Required</sup> <a name="numberOfSamples" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.numberOfSamples"></a>

```typescript
public readonly numberOfSamples: number;
```

- *Type:* number

---

##### `seed`<sup>Required</sup> <a name="seed" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.seed"></a>

```typescript
public readonly seed: number;
```

- *Type:* number

---

##### `shapBaselineConfig`<sup>Required</sup> <a name="shapBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.shapBaselineConfig"></a>

```typescript
public readonly shapBaselineConfig: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference</a>

---

##### `textConfig`<sup>Required</sup> <a name="textConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.textConfig"></a>

```typescript
public readonly textConfig: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference</a>

---

##### `useLogit`<sup>Required</sup> <a name="useLogit" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.useLogit"></a>

```typescript
public readonly useLogit: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaseline">shapBaseline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaselineUri">shapBaselineUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `shapBaseline`<sup>Required</sup> <a name="shapBaseline" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaseline"></a>

```typescript
public readonly shapBaseline: string;
```

- *Type:* string

---

##### `shapBaselineUri`<sup>Required</sup> <a name="shapBaselineUri" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.shapBaselineUri"></a>

```typescript
public readonly shapBaselineUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigShapBaselineConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.granularity">granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigShapConfigTextConfig</a>

---


### DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.clarifyExplainerConfig">clarifyExplainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig">DataAwsccSagemakerEndpointConfigExplainerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clarifyExplainerConfig`<sup>Required</sup> <a name="clarifyExplainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.clarifyExplainerConfig"></a>

```typescript
public readonly clarifyExplainerConfig: DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference">DataAwsccSagemakerEndpointConfigExplainerConfigClarifyExplainerConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigExplainerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigExplainerConfig">DataAwsccSagemakerEndpointConfigExplainerConfig</a>

---


### DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.enableDetailedObservability">enableDetailedObservability</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.enableEnhancedMetrics">enableEnhancedMetrics</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.metricPublishFrequencyInSeconds">metricPublishFrequencyInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig">DataAwsccSagemakerEndpointConfigMetricsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableDetailedObservability`<sup>Required</sup> <a name="enableDetailedObservability" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.enableDetailedObservability"></a>

```typescript
public readonly enableDetailedObservability: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableEnhancedMetrics`<sup>Required</sup> <a name="enableEnhancedMetrics" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.enableEnhancedMetrics"></a>

```typescript
public readonly enableEnhancedMetrics: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `metricPublishFrequencyInSeconds`<sup>Required</sup> <a name="metricPublishFrequencyInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.metricPublishFrequencyInSeconds"></a>

```typescript
public readonly metricPublishFrequencyInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigMetricsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigMetricsConfig">DataAwsccSagemakerEndpointConfigMetricsConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn">mlReservationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig">DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationPreference`<sup>Required</sup> <a name="capacityReservationPreference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

---

##### `mlReservationArn`<sup>Required</sup> <a name="mlReservationArn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn"></a>

```typescript
public readonly mlReservationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig">DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">destinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig">DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```typescript
public readonly destinationS3Uri: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig">DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList <a name="DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.modelNameOverride">modelNameOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools">DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `modelNameOverride`<sup>Required</sup> <a name="modelNameOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.modelNameOverride"></a>

```typescript
public readonly modelNameOverride: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools">DataAwsccSagemakerEndpointConfigProductionVariantsInstancePools</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsList <a name="DataAwsccSagemakerEndpointConfigProductionVariantsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy">scaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `scaleInPolicy`<sup>Required</sup> <a name="scaleInPolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy"></a>

```typescript
public readonly scaleInPolicy: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScaling</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes">cooldownInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize">maximumStepSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cooldownInMinutes`<sup>Required</sup> <a name="cooldownInMinutes" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes"></a>

```typescript
public readonly cooldownInMinutes: number;
```

- *Type:* number

---

##### `maximumStepSize`<sup>Required</sup> <a name="maximumStepSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize"></a>

```typescript
public readonly maximumStepSize: number;
```

- *Type:* number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingScaleInPolicy</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.capacityReservationConfig">capacityReservationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.coreDumpConfig">coreDumpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.enableSsmAccess">enableSsmAccess</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.inferenceAmiVersion">inferenceAmiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.initialInstanceCount">initialInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.initialVariantWeight">initialVariantWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.instancePools">instancePools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList">DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.managedInstanceScaling">managedInstanceScaling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.routingConfig">routingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.serverlessConfig">serverlessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds">variantInstanceProvisionTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.variantName">variantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants">DataAwsccSagemakerEndpointConfigProductionVariants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationConfig`<sup>Required</sup> <a name="capacityReservationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.capacityReservationConfig"></a>

```typescript
public readonly capacityReservationConfig: DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsCapacityReservationConfigOutputReference</a>

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSeconds: number;
```

- *Type:* number

---

##### `coreDumpConfig`<sup>Required</sup> <a name="coreDumpConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.coreDumpConfig"></a>

```typescript
public readonly coreDumpConfig: DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `enableSsmAccess`<sup>Required</sup> <a name="enableSsmAccess" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.enableSsmAccess"></a>

```typescript
public readonly enableSsmAccess: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `inferenceAmiVersion`<sup>Required</sup> <a name="inferenceAmiVersion" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.inferenceAmiVersion"></a>

```typescript
public readonly inferenceAmiVersion: string;
```

- *Type:* string

---

##### `initialInstanceCount`<sup>Required</sup> <a name="initialInstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.initialInstanceCount"></a>

```typescript
public readonly initialInstanceCount: number;
```

- *Type:* number

---

##### `initialVariantWeight`<sup>Required</sup> <a name="initialVariantWeight" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.initialVariantWeight"></a>

```typescript
public readonly initialVariantWeight: number;
```

- *Type:* number

---

##### `instancePools`<sup>Required</sup> <a name="instancePools" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.instancePools"></a>

```typescript
public readonly instancePools: DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList">DataAwsccSagemakerEndpointConfigProductionVariantsInstancePoolsList</a>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `managedInstanceScaling`<sup>Required</sup> <a name="managedInstanceScaling" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.managedInstanceScaling"></a>

```typescript
public readonly managedInstanceScaling: DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsManagedInstanceScalingOutputReference</a>

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```typescript
public readonly modelDataDownloadTimeoutInSeconds: number;
```

- *Type:* number

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `routingConfig`<sup>Required</sup> <a name="routingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.routingConfig"></a>

```typescript
public readonly routingConfig: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference</a>

---

##### `serverlessConfig`<sup>Required</sup> <a name="serverlessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.serverlessConfig"></a>

```typescript
public readonly serverlessConfig: DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference</a>

---

##### `variantInstanceProvisionTimeoutInSeconds`<sup>Required</sup> <a name="variantInstanceProvisionTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds"></a>

```typescript
public readonly variantInstanceProvisionTimeoutInSeconds: number;
```

- *Type:* number

---

##### `variantName`<sup>Required</sup> <a name="variantName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.variantName"></a>

```typescript
public readonly variantName: string;
```

- *Type:* string

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigProductionVariants;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariants">DataAwsccSagemakerEndpointConfigProductionVariants</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig">prefixAwareRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.routingStrategy">routingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixAwareRoutingConfig`<sup>Required</sup> <a name="prefixAwareRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig"></a>

```typescript
public readonly prefixAwareRoutingConfig: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a>

---

##### `routingStrategy`<sup>Required</sup> <a name="routingStrategy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.routingStrategy"></a>

```typescript
public readonly routingStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold">concurrencyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength">prefixLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `concurrencyThreshold`<sup>Required</sup> <a name="concurrencyThreshold" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold"></a>

```typescript
public readonly concurrencyThreshold: number;
```

- *Type:* number

---

##### `prefixLength`<sup>Required</sup> <a name="prefixLength" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength"></a>

```typescript
public readonly prefixLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig">DataAwsccSagemakerEndpointConfigProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a>

---


### DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">memorySizeInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency">provisionedConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig">DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

---

##### `memorySizeInMb`<sup>Required</sup> <a name="memorySizeInMb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```typescript
public readonly memorySizeInMb: number;
```

- *Type:* number

---

##### `provisionedConcurrency`<sup>Required</sup> <a name="provisionedConcurrency" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency"></a>

```typescript
public readonly provisionedConcurrency: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig">DataAwsccSagemakerEndpointConfigProductionVariantsServerlessConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn">mlReservationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationPreference`<sup>Required</sup> <a name="capacityReservationPreference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

---

##### `mlReservationArn`<sup>Required</sup> <a name="mlReservationArn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.mlReservationArn"></a>

```typescript
public readonly mlReservationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">destinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationS3Uri`<sup>Required</sup> <a name="destinationS3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```typescript
public readonly destinationS3Uri: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.modelNameOverride">modelNameOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools">DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `modelNameOverride`<sup>Required</sup> <a name="modelNameOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.modelNameOverride"></a>

```typescript
public readonly modelNameOverride: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools">DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePools</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsList <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy">scaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `scaleInPolicy`<sup>Required</sup> <a name="scaleInPolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.scaleInPolicy"></a>

```typescript
public readonly scaleInPolicy: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScaling</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes">cooldownInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize">maximumStepSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cooldownInMinutes`<sup>Required</sup> <a name="cooldownInMinutes" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.cooldownInMinutes"></a>

```typescript
public readonly cooldownInMinutes: number;
```

- *Type:* number

---

##### `maximumStepSize`<sup>Required</sup> <a name="maximumStepSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.maximumStepSize"></a>

```typescript
public readonly maximumStepSize: number;
```

- *Type:* number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicy</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.capacityReservationConfig">capacityReservationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.coreDumpConfig">coreDumpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.enableSsmAccess">enableSsmAccess</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.inferenceAmiVersion">inferenceAmiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialInstanceCount">initialInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialVariantWeight">initialVariantWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instancePools">instancePools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList">DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.managedInstanceScaling">managedInstanceScaling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.routingConfig">routingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.serverlessConfig">serverlessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds">variantInstanceProvisionTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantName">variantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants">DataAwsccSagemakerEndpointConfigShadowProductionVariants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationConfig`<sup>Required</sup> <a name="capacityReservationConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.capacityReservationConfig"></a>

```typescript
public readonly capacityReservationConfig: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCapacityReservationConfigOutputReference</a>

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSeconds: number;
```

- *Type:* number

---

##### `coreDumpConfig`<sup>Required</sup> <a name="coreDumpConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.coreDumpConfig"></a>

```typescript
public readonly coreDumpConfig: DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `enableSsmAccess`<sup>Required</sup> <a name="enableSsmAccess" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.enableSsmAccess"></a>

```typescript
public readonly enableSsmAccess: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `inferenceAmiVersion`<sup>Required</sup> <a name="inferenceAmiVersion" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.inferenceAmiVersion"></a>

```typescript
public readonly inferenceAmiVersion: string;
```

- *Type:* string

---

##### `initialInstanceCount`<sup>Required</sup> <a name="initialInstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialInstanceCount"></a>

```typescript
public readonly initialInstanceCount: number;
```

- *Type:* number

---

##### `initialVariantWeight`<sup>Required</sup> <a name="initialVariantWeight" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.initialVariantWeight"></a>

```typescript
public readonly initialVariantWeight: number;
```

- *Type:* number

---

##### `instancePools`<sup>Required</sup> <a name="instancePools" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instancePools"></a>

```typescript
public readonly instancePools: DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList">DataAwsccSagemakerEndpointConfigShadowProductionVariantsInstancePoolsList</a>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `managedInstanceScaling`<sup>Required</sup> <a name="managedInstanceScaling" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.managedInstanceScaling"></a>

```typescript
public readonly managedInstanceScaling: DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsManagedInstanceScalingOutputReference</a>

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```typescript
public readonly modelDataDownloadTimeoutInSeconds: number;
```

- *Type:* number

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `routingConfig`<sup>Required</sup> <a name="routingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.routingConfig"></a>

```typescript
public readonly routingConfig: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference</a>

---

##### `serverlessConfig`<sup>Required</sup> <a name="serverlessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.serverlessConfig"></a>

```typescript
public readonly serverlessConfig: DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference</a>

---

##### `variantInstanceProvisionTimeoutInSeconds`<sup>Required</sup> <a name="variantInstanceProvisionTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantInstanceProvisionTimeoutInSeconds"></a>

```typescript
public readonly variantInstanceProvisionTimeoutInSeconds: number;
```

- *Type:* number

---

##### `variantName`<sup>Required</sup> <a name="variantName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.variantName"></a>

```typescript
public readonly variantName: string;
```

- *Type:* string

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigShadowProductionVariants;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariants">DataAwsccSagemakerEndpointConfigShadowProductionVariants</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig">prefixAwareRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.routingStrategy">routingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixAwareRoutingConfig`<sup>Required</sup> <a name="prefixAwareRoutingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.prefixAwareRoutingConfig"></a>

```typescript
public readonly prefixAwareRoutingConfig: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference</a>

---

##### `routingStrategy`<sup>Required</sup> <a name="routingStrategy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.routingStrategy"></a>

```typescript
public readonly routingStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold">concurrencyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength">prefixLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `concurrencyThreshold`<sup>Required</sup> <a name="concurrencyThreshold" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.concurrencyThreshold"></a>

```typescript
public readonly concurrencyThreshold: number;
```

- *Type:* number

---

##### `prefixLength`<sup>Required</sup> <a name="prefixLength" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.prefixLength"></a>

```typescript
public readonly prefixLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfig</a>

---


### DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">memorySizeInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency">provisionedConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

---

##### `memorySizeInMb`<sup>Required</sup> <a name="memorySizeInMb" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```typescript
public readonly memorySizeInMb: number;
```

- *Type:* number

---

##### `provisionedConcurrency`<sup>Required</sup> <a name="provisionedConcurrency" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.provisionedConcurrency"></a>

```typescript
public readonly provisionedConcurrency: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig">DataAwsccSagemakerEndpointConfigShadowProductionVariantsServerlessConfig</a>

---


### DataAwsccSagemakerEndpointConfigTagsList <a name="DataAwsccSagemakerEndpointConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerEndpointConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerEndpointConfigTagsOutputReference <a name="DataAwsccSagemakerEndpointConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags">DataAwsccSagemakerEndpointConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigTags">DataAwsccSagemakerEndpointConfigTags</a>

---


### DataAwsccSagemakerEndpointConfigVpcConfigOutputReference <a name="DataAwsccSagemakerEndpointConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpointConfig } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig">DataAwsccSagemakerEndpointConfigVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointConfigVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpointConfig.DataAwsccSagemakerEndpointConfigVpcConfig">DataAwsccSagemakerEndpointConfigVpcConfig</a>

---



