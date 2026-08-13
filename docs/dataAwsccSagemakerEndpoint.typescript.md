# `dataAwsccSagemakerEndpoint` Submodule <a name="`dataAwsccSagemakerEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerEndpoint <a name="DataAwsccSagemakerEndpoint" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_endpoint awscc_sagemaker_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint(scope: Construct, id: string, config: DataAwsccSagemakerEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig">DataAwsccSagemakerEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig">DataAwsccSagemakerEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isConstruct"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.deploymentConfig">deploymentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference">DataAwsccSagemakerEndpointDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointArn">endpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointConfigName">endpointConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.excludeRetainedVariantProperties">excludeRetainedVariantProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList">DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.retainAllVariantProperties">retainAllVariantProperties</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.retainDeploymentConfig">retainDeploymentConfig</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList">DataAwsccSagemakerEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `deploymentConfig`<sup>Required</sup> <a name="deploymentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.deploymentConfig"></a>

```typescript
public readonly deploymentConfig: DataAwsccSagemakerEndpointDeploymentConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference">DataAwsccSagemakerEndpointDeploymentConfigOutputReference</a>

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointArn"></a>

```typescript
public readonly endpointArn: string;
```

- *Type:* string

---

##### `endpointConfigName`<sup>Required</sup> <a name="endpointConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointConfigName"></a>

```typescript
public readonly endpointConfigName: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `excludeRetainedVariantProperties`<sup>Required</sup> <a name="excludeRetainedVariantProperties" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.excludeRetainedVariantProperties"></a>

```typescript
public readonly excludeRetainedVariantProperties: DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList">DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList</a>

---

##### `retainAllVariantProperties`<sup>Required</sup> <a name="retainAllVariantProperties" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.retainAllVariantProperties"></a>

```typescript
public readonly retainAllVariantProperties: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `retainDeploymentConfig`<sup>Required</sup> <a name="retainDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.retainDeploymentConfig"></a>

```typescript
public readonly retainDeploymentConfig: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList">DataAwsccSagemakerEndpointTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerEndpointConfig <a name="DataAwsccSagemakerEndpointConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointConfig: dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_endpoint#id DataAwsccSagemakerEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerEndpointDeploymentConfig <a name="DataAwsccSagemakerEndpointDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointDeploymentConfig: dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig = { ... }
```


### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration: dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration = { ... }
```


### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms: dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms = { ... }
```


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy: dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy = { ... }
```


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration: dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration = { ... }
```


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize: dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize = { ... }
```


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize: dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize = { ... }
```


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy: dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy = { ... }
```


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize: dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize = { ... }
```


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize: dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize = { ... }
```


### DataAwsccSagemakerEndpointExcludeRetainedVariantProperties <a name="DataAwsccSagemakerEndpointExcludeRetainedVariantProperties" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointExcludeRetainedVariantProperties: dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties = { ... }
```


### DataAwsccSagemakerEndpointTags <a name="DataAwsccSagemakerEndpointTags" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

const dataAwsccSagemakerEndpointTags: dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName">alarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms"></a>

```typescript
public readonly alarms: DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">maximumExecutionTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSeconds">terminationWaitInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfiguration">trafficRoutingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumExecutionTimeoutInSeconds`<sup>Required</sup> <a name="maximumExecutionTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```typescript
public readonly maximumExecutionTimeoutInSeconds: number;
```

- *Type:* number

---

##### `terminationWaitInSeconds`<sup>Required</sup> <a name="terminationWaitInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSeconds"></a>

```typescript
public readonly terminationWaitInSeconds: number;
```

- *Type:* number

---

##### `trafficRoutingConfiguration`<sup>Required</sup> <a name="trafficRoutingConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfiguration"></a>

```typescript
public readonly trafficRoutingConfiguration: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySize">canarySize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSize">linearStepSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSeconds">waitIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canarySize`<sup>Required</sup> <a name="canarySize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySize"></a>

```typescript
public readonly canarySize: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference</a>

---

##### `linearStepSize`<sup>Required</sup> <a name="linearStepSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSize"></a>

```typescript
public readonly linearStepSize: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `waitIntervalInSeconds`<sup>Required</sup> <a name="waitIntervalInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSeconds"></a>

```typescript
public readonly waitIntervalInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicy">blueGreenUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.rollingUpdatePolicy">rollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig">DataAwsccSagemakerEndpointDeploymentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRollbackConfiguration`<sup>Required</sup> <a name="autoRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```typescript
public readonly autoRollbackConfiguration: DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference</a>

---

##### `blueGreenUpdatePolicy`<sup>Required</sup> <a name="blueGreenUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicy"></a>

```typescript
public readonly blueGreenUpdatePolicy: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference</a>

---

##### `rollingUpdatePolicy`<sup>Required</sup> <a name="rollingUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```typescript
public readonly rollingUpdatePolicy: DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointDeploymentConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig">DataAwsccSagemakerEndpointDeploymentConfig</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">maximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">maximumExecutionTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">rollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds">waitIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumBatchSize`<sup>Required</sup> <a name="maximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```typescript
public readonly maximumBatchSize: DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a>

---

##### `maximumExecutionTimeoutInSeconds`<sup>Required</sup> <a name="maximumExecutionTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```typescript
public readonly maximumExecutionTimeoutInSeconds: number;
```

- *Type:* number

---

##### `rollbackMaximumBatchSize`<sup>Required</sup> <a name="rollbackMaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```typescript
public readonly rollbackMaximumBatchSize: DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a>

---

##### `waitIntervalInSeconds`<sup>Required</sup> <a name="waitIntervalInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds"></a>

```typescript
public readonly waitIntervalInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---


### DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList <a name="DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference <a name="DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.variantPropertyType">variantPropertyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties">DataAwsccSagemakerEndpointExcludeRetainedVariantProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `variantPropertyType`<sup>Required</sup> <a name="variantPropertyType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.variantPropertyType"></a>

```typescript
public readonly variantPropertyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointExcludeRetainedVariantProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties">DataAwsccSagemakerEndpointExcludeRetainedVariantProperties</a>

---


### DataAwsccSagemakerEndpointTagsList <a name="DataAwsccSagemakerEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerEndpointTagsOutputReference <a name="DataAwsccSagemakerEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerEndpoint } from '@cdktn/provider-awscc'

new dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags">DataAwsccSagemakerEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerEndpointTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags">DataAwsccSagemakerEndpointTags</a>

---



