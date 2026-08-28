# `dataAwsccHealthlakeDataTransformationProfile` Submodule <a name="`dataAwsccHealthlakeDataTransformationProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccHealthlakeDataTransformationProfile <a name="DataAwsccHealthlakeDataTransformationProfile" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/healthlake_data_transformation_profile awscc_healthlake_data_transformation_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile(scope: Construct, id: string, config: DataAwsccHealthlakeDataTransformationProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig">DataAwsccHealthlakeDataTransformationProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig">DataAwsccHealthlakeDataTransformationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccHealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isConstruct"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformElement"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccHealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccHealthlakeDataTransformationProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccHealthlakeDataTransformationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/healthlake_data_transformation_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccHealthlakeDataTransformationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileDescription">profileDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.sourceFormat">sourceFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList">DataAwsccHealthlakeDataTransformationProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.targetFormat">targetFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `profileDescription`<sup>Required</sup> <a name="profileDescription" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileDescription"></a>

```typescript
public readonly profileDescription: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.source"></a>

```typescript
public readonly source: DataAwsccHealthlakeDataTransformationProfileSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceOutputReference</a>

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.sourceFormat"></a>

```typescript
public readonly sourceFormat: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tags"></a>

```typescript
public readonly tags: DataAwsccHealthlakeDataTransformationProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList">DataAwsccHealthlakeDataTransformationProfileTagsList</a>

---

##### `targetFormat`<sup>Required</sup> <a name="targetFormat" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.targetFormat"></a>

```typescript
public readonly targetFormat: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccHealthlakeDataTransformationProfileConfig <a name="DataAwsccHealthlakeDataTransformationProfileConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.Initializer"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

const dataAwsccHealthlakeDataTransformationProfileConfig: dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/healthlake_data_transformation_profile#id DataAwsccHealthlakeDataTransformationProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccHealthlakeDataTransformationProfileSource <a name="DataAwsccHealthlakeDataTransformationProfileSource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource.Initializer"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

const dataAwsccHealthlakeDataTransformationProfileSource: dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource = { ... }
```


### DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId <a name="DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId.Initializer"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

const dataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId: dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId = { ... }
```


### DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping <a name="DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping.Initializer"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

const dataAwsccHealthlakeDataTransformationProfileSourceProfileMapping: dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping = { ... }
```


### DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile <a name="DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile.Initializer"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

const dataAwsccHealthlakeDataTransformationProfileSourceStarterProfile: dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile = { ... }
```


### DataAwsccHealthlakeDataTransformationProfileTags <a name="DataAwsccHealthlakeDataTransformationProfileTags" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags.Initializer"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

const dataAwsccHealthlakeDataTransformationProfileTags: dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---


### DataAwsccHealthlakeDataTransformationProfileSourceOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId">existingVersionedProfileId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping">profileMapping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile">starterProfile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource">DataAwsccHealthlakeDataTransformationProfileSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `existingVersionedProfileId`<sup>Required</sup> <a name="existingVersionedProfileId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId"></a>

```typescript
public readonly existingVersionedProfileId: DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a>

---

##### `profileMapping`<sup>Required</sup> <a name="profileMapping" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping"></a>

```typescript
public readonly profileMapping: DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a>

---

##### `starterProfile`<sup>Required</sup> <a name="starterProfile" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile"></a>

```typescript
public readonly starterProfile: DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccHealthlakeDataTransformationProfileSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource">DataAwsccHealthlakeDataTransformationProfileSource</a>

---


### DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping">profileMapping</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping">DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `profileMapping`<sup>Required</sup> <a name="profileMapping" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping"></a>

```typescript
public readonly profileMapping: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping">DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping</a>

---


### DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName">starterProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `starterProfileName`<sup>Required</sup> <a name="starterProfileName" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName"></a>

```typescript
public readonly starterProfileName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile</a>

---


### DataAwsccHealthlakeDataTransformationProfileTagsList <a name="DataAwsccHealthlakeDataTransformationProfileTagsList" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.get"></a>

```typescript
public get(index: number): DataAwsccHealthlakeDataTransformationProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccHealthlakeDataTransformationProfileTagsOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccHealthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags">DataAwsccHealthlakeDataTransformationProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccHealthlakeDataTransformationProfileTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags">DataAwsccHealthlakeDataTransformationProfileTags</a>

---



