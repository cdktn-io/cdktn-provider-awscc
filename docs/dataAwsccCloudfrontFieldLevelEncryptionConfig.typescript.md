# `dataAwsccCloudfrontFieldLevelEncryptionConfig` Submodule <a name="`dataAwsccCloudfrontFieldLevelEncryptionConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontFieldLevelEncryptionConfig <a name="DataAwsccCloudfrontFieldLevelEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/cloudfront_field_level_encryption_config awscc_cloudfront_field_level_encryption_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig(scope: Construct, id: string, config: DataAwsccCloudfrontFieldLevelEncryptionConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig">DataAwsccCloudfrontFieldLevelEncryptionConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig">DataAwsccCloudfrontFieldLevelEncryptionConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontFieldLevelEncryptionConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.isConstruct"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.isTerraformElement"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudfrontFieldLevelEncryptionConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudfrontFieldLevelEncryptionConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudfrontFieldLevelEncryptionConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/cloudfront_field_level_encryption_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontFieldLevelEncryptionConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.callerReference">callerReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.contentTypeProfileConfig">contentTypeProfileConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference">DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.fieldLevelEncryptionConfigId">fieldLevelEncryptionConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.queryArgProfileConfig">queryArgProfileConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference">DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `callerReference`<sup>Required</sup> <a name="callerReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.callerReference"></a>

```typescript
public readonly callerReference: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `contentTypeProfileConfig`<sup>Required</sup> <a name="contentTypeProfileConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.contentTypeProfileConfig"></a>

```typescript
public readonly contentTypeProfileConfig: DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference">DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference</a>

---

##### `fieldLevelEncryptionConfigId`<sup>Required</sup> <a name="fieldLevelEncryptionConfigId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.fieldLevelEncryptionConfigId"></a>

```typescript
public readonly fieldLevelEncryptionConfigId: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `queryArgProfileConfig`<sup>Required</sup> <a name="queryArgProfileConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.queryArgProfileConfig"></a>

```typescript
public readonly queryArgProfileConfig: DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference">DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontFieldLevelEncryptionConfigConfig <a name="DataAwsccCloudfrontFieldLevelEncryptionConfigConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontFieldLevelEncryptionConfigConfig: dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/cloudfront_field_level_encryption_config#id DataAwsccCloudfrontFieldLevelEncryptionConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig <a name="DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig: dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig = { ... }
```


### DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles <a name="DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles: dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles = { ... }
```


### DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig <a name="DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig: dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig = { ... }
```


### DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles <a name="DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles: dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList <a name="DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.get"></a>

```typescript
public get(index: number): DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference <a name="DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a>

---


### DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference <a name="DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.contentTypeProfiles">contentTypeProfiles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList">DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.forwardWhenContentTypeIsUnknown">forwardWhenContentTypeIsUnknown</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypeProfiles`<sup>Required</sup> <a name="contentTypeProfiles" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.contentTypeProfiles"></a>

```typescript
public readonly contentTypeProfiles: DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList">DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList</a>

---

##### `forwardWhenContentTypeIsUnknown`<sup>Required</sup> <a name="forwardWhenContentTypeIsUnknown" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.forwardWhenContentTypeIsUnknown"></a>

```typescript
public readonly forwardWhenContentTypeIsUnknown: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">DataAwsccCloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a>

---


### DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference <a name="DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.forwardWhenQueryArgProfileIsUnknown">forwardWhenQueryArgProfileIsUnknown</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.queryArgProfiles">queryArgProfiles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList">DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forwardWhenQueryArgProfileIsUnknown`<sup>Required</sup> <a name="forwardWhenQueryArgProfileIsUnknown" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.forwardWhenQueryArgProfileIsUnknown"></a>

```typescript
public readonly forwardWhenQueryArgProfileIsUnknown: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `queryArgProfiles`<sup>Required</sup> <a name="queryArgProfiles" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.queryArgProfiles"></a>

```typescript
public readonly queryArgProfiles: DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList">DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a>

---


### DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList <a name="DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.get"></a>

```typescript
public get(index: number): DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference <a name="DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontFieldLevelEncryptionConfig } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.queryArg">queryArg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `queryArg`<sup>Required</sup> <a name="queryArg" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.queryArg"></a>

```typescript
public readonly queryArg: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontFieldLevelEncryptionConfig.DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">DataAwsccCloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a>

---



