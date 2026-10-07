# `dataAwsccCloudfrontFieldLevelEncryptionProfile` Submodule <a name="`dataAwsccCloudfrontFieldLevelEncryptionProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontFieldLevelEncryptionProfile <a name="DataAwsccCloudfrontFieldLevelEncryptionProfile" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/cloudfront_field_level_encryption_profile awscc_cloudfront_field_level_encryption_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile(scope: Construct, id: string, config: DataAwsccCloudfrontFieldLevelEncryptionProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig">DataAwsccCloudfrontFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig">DataAwsccCloudfrontFieldLevelEncryptionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontFieldLevelEncryptionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isConstruct"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformElement"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudfrontFieldLevelEncryptionProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudfrontFieldLevelEncryptionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudfrontFieldLevelEncryptionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/cloudfront_field_level_encryption_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontFieldLevelEncryptionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfig">fieldLevelEncryptionProfileConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileId">fieldLevelEncryptionProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fieldLevelEncryptionProfileConfig`<sup>Required</sup> <a name="fieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfig"></a>

```typescript
public readonly fieldLevelEncryptionProfileConfig: DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference</a>

---

##### `fieldLevelEncryptionProfileId`<sup>Required</sup> <a name="fieldLevelEncryptionProfileId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileId"></a>

```typescript
public readonly fieldLevelEncryptionProfileId: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontFieldLevelEncryptionProfileConfig <a name="DataAwsccCloudfrontFieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontFieldLevelEncryptionProfileConfig: dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/cloudfront_field_level_encryption_profile#id DataAwsccCloudfrontFieldLevelEncryptionProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig <a name="DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig: dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig = { ... }
```


### DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities <a name="DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities: dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList <a name="DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get"></a>

```typescript
public get(index: number): DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference <a name="DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatterns">fieldPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerId">providerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyId">publicKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldPatterns`<sup>Required</sup> <a name="fieldPatterns" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatterns"></a>

```typescript
public readonly fieldPatterns: string[];
```

- *Type:* string[]

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

---

##### `publicKeyId`<sup>Required</sup> <a name="publicKeyId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyId"></a>

```typescript
public readonly publicKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>

---


### DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference <a name="DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReference">callerReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntities">encryptionEntities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `callerReference`<sup>Required</sup> <a name="callerReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReference"></a>

```typescript
public readonly callerReference: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `encryptionEntities`<sup>Required</sup> <a name="encryptionEntities" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntities"></a>

```typescript
public readonly encryptionEntities: DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionProfile.DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">DataAwsccCloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

---



