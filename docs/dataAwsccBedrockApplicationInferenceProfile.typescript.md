# `dataAwsccBedrockApplicationInferenceProfile` Submodule <a name="`dataAwsccBedrockApplicationInferenceProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockApplicationInferenceProfile <a name="DataAwsccBedrockApplicationInferenceProfile" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_application_inference_profile awscc_bedrock_application_inference_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

new dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile(scope: Construct, id: string, config: DataAwsccBedrockApplicationInferenceProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig">DataAwsccBedrockApplicationInferenceProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig">DataAwsccBedrockApplicationInferenceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockApplicationInferenceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isConstruct"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockApplicationInferenceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockApplicationInferenceProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockApplicationInferenceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_application_inference_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockApplicationInferenceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileArn">inferenceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileId">inferenceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileIdentifier">inferenceProfileIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileName">inferenceProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.models">models</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList">DataAwsccBedrockApplicationInferenceProfileModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.modelSource">modelSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference">DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList">DataAwsccBedrockApplicationInferenceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inferenceProfileArn`<sup>Required</sup> <a name="inferenceProfileArn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileArn"></a>

```typescript
public readonly inferenceProfileArn: string;
```

- *Type:* string

---

##### `inferenceProfileId`<sup>Required</sup> <a name="inferenceProfileId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileId"></a>

```typescript
public readonly inferenceProfileId: string;
```

- *Type:* string

---

##### `inferenceProfileIdentifier`<sup>Required</sup> <a name="inferenceProfileIdentifier" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileIdentifier"></a>

```typescript
public readonly inferenceProfileIdentifier: string;
```

- *Type:* string

---

##### `inferenceProfileName`<sup>Required</sup> <a name="inferenceProfileName" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileName"></a>

```typescript
public readonly inferenceProfileName: string;
```

- *Type:* string

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.models"></a>

```typescript
public readonly models: DataAwsccBedrockApplicationInferenceProfileModelsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList">DataAwsccBedrockApplicationInferenceProfileModelsList</a>

---

##### `modelSource`<sup>Required</sup> <a name="modelSource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.modelSource"></a>

```typescript
public readonly modelSource: DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference">DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.tags"></a>

```typescript
public readonly tags: DataAwsccBedrockApplicationInferenceProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList">DataAwsccBedrockApplicationInferenceProfileTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockApplicationInferenceProfileConfig <a name="DataAwsccBedrockApplicationInferenceProfileConfig" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

const dataAwsccBedrockApplicationInferenceProfileConfig: dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_application_inference_profile#id DataAwsccBedrockApplicationInferenceProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockApplicationInferenceProfileModels <a name="DataAwsccBedrockApplicationInferenceProfileModels" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels.Initializer"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

const dataAwsccBedrockApplicationInferenceProfileModels: dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels = { ... }
```


### DataAwsccBedrockApplicationInferenceProfileModelSource <a name="DataAwsccBedrockApplicationInferenceProfileModelSource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource.Initializer"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

const dataAwsccBedrockApplicationInferenceProfileModelSource: dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource = { ... }
```


### DataAwsccBedrockApplicationInferenceProfileTags <a name="DataAwsccBedrockApplicationInferenceProfileTags" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags.Initializer"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

const dataAwsccBedrockApplicationInferenceProfileTags: dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockApplicationInferenceProfileModelsList <a name="DataAwsccBedrockApplicationInferenceProfileModelsList" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

new dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockApplicationInferenceProfileModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference <a name="DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

new dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFrom">copyFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource">DataAwsccBedrockApplicationInferenceProfileModelSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyFrom`<sup>Required</sup> <a name="copyFrom" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFrom"></a>

```typescript
public readonly copyFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockApplicationInferenceProfileModelSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource">DataAwsccBedrockApplicationInferenceProfileModelSource</a>

---


### DataAwsccBedrockApplicationInferenceProfileModelsOutputReference <a name="DataAwsccBedrockApplicationInferenceProfileModelsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

new dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.modelArn">modelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels">DataAwsccBedrockApplicationInferenceProfileModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockApplicationInferenceProfileModels;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels">DataAwsccBedrockApplicationInferenceProfileModels</a>

---


### DataAwsccBedrockApplicationInferenceProfileTagsList <a name="DataAwsccBedrockApplicationInferenceProfileTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

new dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockApplicationInferenceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockApplicationInferenceProfileTagsOutputReference <a name="DataAwsccBedrockApplicationInferenceProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockApplicationInferenceProfile } from '@cdktn/provider-awscc'

new dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags">DataAwsccBedrockApplicationInferenceProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockApplicationInferenceProfileTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags">DataAwsccBedrockApplicationInferenceProfileTags</a>

---



