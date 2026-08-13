# `dataAwsccS3StorageLensGroup` Submodule <a name="`dataAwsccS3StorageLensGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3StorageLensGroup <a name="DataAwsccS3StorageLensGroup" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3_storage_lens_group awscc_s3_storage_lens_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup(scope: Construct, id: string, config: DataAwsccS3StorageLensGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig">DataAwsccS3StorageLensGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig">DataAwsccS3StorageLensGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3StorageLensGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isConstruct"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformElement"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccS3StorageLensGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccS3StorageLensGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccS3StorageLensGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3_storage_lens_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3StorageLensGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference">DataAwsccS3StorageLensGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.storageLensGroupArn">storageLensGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList">DataAwsccS3StorageLensGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.filter"></a>

```typescript
public readonly filter: DataAwsccS3StorageLensGroupFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference">DataAwsccS3StorageLensGroupFilterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageLensGroupArn`<sup>Required</sup> <a name="storageLensGroupArn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.storageLensGroupArn"></a>

```typescript
public readonly storageLensGroupArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.tags"></a>

```typescript
public readonly tags: DataAwsccS3StorageLensGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList">DataAwsccS3StorageLensGroupTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3StorageLensGroupConfig <a name="DataAwsccS3StorageLensGroupConfig" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupConfig: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3_storage_lens_group#id DataAwsccS3StorageLensGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3StorageLensGroupFilter <a name="DataAwsccS3StorageLensGroupFilter" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupFilter: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter = { ... }
```


### DataAwsccS3StorageLensGroupFilterAnd <a name="DataAwsccS3StorageLensGroupFilterAnd" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupFilterAnd: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd = { ... }
```


### DataAwsccS3StorageLensGroupFilterAndMatchAnyTag <a name="DataAwsccS3StorageLensGroupFilterAndMatchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupFilterAndMatchAnyTag: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag = { ... }
```


### DataAwsccS3StorageLensGroupFilterAndMatchObjectAge <a name="DataAwsccS3StorageLensGroupFilterAndMatchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupFilterAndMatchObjectAge: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge = { ... }
```


### DataAwsccS3StorageLensGroupFilterAndMatchObjectSize <a name="DataAwsccS3StorageLensGroupFilterAndMatchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupFilterAndMatchObjectSize: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize = { ... }
```


### DataAwsccS3StorageLensGroupFilterMatchAnyTag <a name="DataAwsccS3StorageLensGroupFilterMatchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupFilterMatchAnyTag: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag = { ... }
```


### DataAwsccS3StorageLensGroupFilterMatchObjectAge <a name="DataAwsccS3StorageLensGroupFilterMatchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupFilterMatchObjectAge: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge = { ... }
```


### DataAwsccS3StorageLensGroupFilterMatchObjectSize <a name="DataAwsccS3StorageLensGroupFilterMatchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupFilterMatchObjectSize: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize = { ... }
```


### DataAwsccS3StorageLensGroupFilterOr <a name="DataAwsccS3StorageLensGroupFilterOr" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupFilterOr: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr = { ... }
```


### DataAwsccS3StorageLensGroupFilterOrMatchAnyTag <a name="DataAwsccS3StorageLensGroupFilterOrMatchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupFilterOrMatchAnyTag: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag = { ... }
```


### DataAwsccS3StorageLensGroupFilterOrMatchObjectAge <a name="DataAwsccS3StorageLensGroupFilterOrMatchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupFilterOrMatchObjectAge: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge = { ... }
```


### DataAwsccS3StorageLensGroupFilterOrMatchObjectSize <a name="DataAwsccS3StorageLensGroupFilterOrMatchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupFilterOrMatchObjectSize: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize = { ... }
```


### DataAwsccS3StorageLensGroupTags <a name="DataAwsccS3StorageLensGroupTags" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

const dataAwsccS3StorageLensGroupTags: dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList <a name="DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.get"></a>

```typescript
public get(index: number): DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference <a name="DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag">DataAwsccS3StorageLensGroupFilterAndMatchAnyTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3StorageLensGroupFilterAndMatchAnyTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag">DataAwsccS3StorageLensGroupFilterAndMatchAnyTag</a>

---


### DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference <a name="DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThan">daysGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThan">daysLessThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge">DataAwsccS3StorageLensGroupFilterAndMatchObjectAge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysGreaterThan`<sup>Required</sup> <a name="daysGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```typescript
public readonly daysGreaterThan: number;
```

- *Type:* number

---

##### `daysLessThan`<sup>Required</sup> <a name="daysLessThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThan"></a>

```typescript
public readonly daysLessThan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3StorageLensGroupFilterAndMatchObjectAge;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge">DataAwsccS3StorageLensGroupFilterAndMatchObjectAge</a>

---


### DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference <a name="DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThan">bytesGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThan">bytesLessThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize">DataAwsccS3StorageLensGroupFilterAndMatchObjectSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bytesGreaterThan`<sup>Required</sup> <a name="bytesGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```typescript
public readonly bytesGreaterThan: number;
```

- *Type:* number

---

##### `bytesLessThan`<sup>Required</sup> <a name="bytesLessThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```typescript
public readonly bytesLessThan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3StorageLensGroupFilterAndMatchObjectSize;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize">DataAwsccS3StorageLensGroupFilterAndMatchObjectSize</a>

---


### DataAwsccS3StorageLensGroupFilterAndOutputReference <a name="DataAwsccS3StorageLensGroupFilterAndOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefix">matchAnyPrefix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnySuffix">matchAnySuffix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnyTag">matchAnyTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList">DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchObjectAge">matchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchObjectSize">matchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd">DataAwsccS3StorageLensGroupFilterAnd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchAnyPrefix`<sup>Required</sup> <a name="matchAnyPrefix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefix"></a>

```typescript
public readonly matchAnyPrefix: string[];
```

- *Type:* string[]

---

##### `matchAnySuffix`<sup>Required</sup> <a name="matchAnySuffix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnySuffix"></a>

```typescript
public readonly matchAnySuffix: string[];
```

- *Type:* string[]

---

##### `matchAnyTag`<sup>Required</sup> <a name="matchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnyTag"></a>

```typescript
public readonly matchAnyTag: DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList">DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList</a>

---

##### `matchObjectAge`<sup>Required</sup> <a name="matchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchObjectAge"></a>

```typescript
public readonly matchObjectAge: DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference</a>

---

##### `matchObjectSize`<sup>Required</sup> <a name="matchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchObjectSize"></a>

```typescript
public readonly matchObjectSize: DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3StorageLensGroupFilterAnd;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd">DataAwsccS3StorageLensGroupFilterAnd</a>

---


### DataAwsccS3StorageLensGroupFilterMatchAnyTagList <a name="DataAwsccS3StorageLensGroupFilterMatchAnyTagList" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.get"></a>

```typescript
public get(index: number): DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference <a name="DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag">DataAwsccS3StorageLensGroupFilterMatchAnyTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3StorageLensGroupFilterMatchAnyTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag">DataAwsccS3StorageLensGroupFilterMatchAnyTag</a>

---


### DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference <a name="DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThan">daysGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThan">daysLessThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge">DataAwsccS3StorageLensGroupFilterMatchObjectAge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysGreaterThan`<sup>Required</sup> <a name="daysGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```typescript
public readonly daysGreaterThan: number;
```

- *Type:* number

---

##### `daysLessThan`<sup>Required</sup> <a name="daysLessThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThan"></a>

```typescript
public readonly daysLessThan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3StorageLensGroupFilterMatchObjectAge;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge">DataAwsccS3StorageLensGroupFilterMatchObjectAge</a>

---


### DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference <a name="DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThan">bytesGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThan">bytesLessThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize">DataAwsccS3StorageLensGroupFilterMatchObjectSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bytesGreaterThan`<sup>Required</sup> <a name="bytesGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```typescript
public readonly bytesGreaterThan: number;
```

- *Type:* number

---

##### `bytesLessThan`<sup>Required</sup> <a name="bytesLessThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```typescript
public readonly bytesLessThan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3StorageLensGroupFilterMatchObjectSize;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize">DataAwsccS3StorageLensGroupFilterMatchObjectSize</a>

---


### DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList <a name="DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.get"></a>

```typescript
public get(index: number): DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference <a name="DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag">DataAwsccS3StorageLensGroupFilterOrMatchAnyTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3StorageLensGroupFilterOrMatchAnyTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag">DataAwsccS3StorageLensGroupFilterOrMatchAnyTag</a>

---


### DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference <a name="DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThan">daysGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThan">daysLessThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge">DataAwsccS3StorageLensGroupFilterOrMatchObjectAge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysGreaterThan`<sup>Required</sup> <a name="daysGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```typescript
public readonly daysGreaterThan: number;
```

- *Type:* number

---

##### `daysLessThan`<sup>Required</sup> <a name="daysLessThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThan"></a>

```typescript
public readonly daysLessThan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3StorageLensGroupFilterOrMatchObjectAge;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge">DataAwsccS3StorageLensGroupFilterOrMatchObjectAge</a>

---


### DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference <a name="DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThan">bytesGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThan">bytesLessThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize">DataAwsccS3StorageLensGroupFilterOrMatchObjectSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bytesGreaterThan`<sup>Required</sup> <a name="bytesGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```typescript
public readonly bytesGreaterThan: number;
```

- *Type:* number

---

##### `bytesLessThan`<sup>Required</sup> <a name="bytesLessThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```typescript
public readonly bytesLessThan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3StorageLensGroupFilterOrMatchObjectSize;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize">DataAwsccS3StorageLensGroupFilterOrMatchObjectSize</a>

---


### DataAwsccS3StorageLensGroupFilterOrOutputReference <a name="DataAwsccS3StorageLensGroupFilterOrOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefix">matchAnyPrefix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnySuffix">matchAnySuffix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnyTag">matchAnyTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList">DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchObjectAge">matchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchObjectSize">matchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr">DataAwsccS3StorageLensGroupFilterOr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchAnyPrefix`<sup>Required</sup> <a name="matchAnyPrefix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefix"></a>

```typescript
public readonly matchAnyPrefix: string[];
```

- *Type:* string[]

---

##### `matchAnySuffix`<sup>Required</sup> <a name="matchAnySuffix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnySuffix"></a>

```typescript
public readonly matchAnySuffix: string[];
```

- *Type:* string[]

---

##### `matchAnyTag`<sup>Required</sup> <a name="matchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnyTag"></a>

```typescript
public readonly matchAnyTag: DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList">DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList</a>

---

##### `matchObjectAge`<sup>Required</sup> <a name="matchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchObjectAge"></a>

```typescript
public readonly matchObjectAge: DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference</a>

---

##### `matchObjectSize`<sup>Required</sup> <a name="matchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchObjectSize"></a>

```typescript
public readonly matchObjectSize: DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3StorageLensGroupFilterOr;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr">DataAwsccS3StorageLensGroupFilterOr</a>

---


### DataAwsccS3StorageLensGroupFilterOutputReference <a name="DataAwsccS3StorageLensGroupFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.and">and</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference">DataAwsccS3StorageLensGroupFilterAndOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnyPrefix">matchAnyPrefix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnySuffix">matchAnySuffix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnyTag">matchAnyTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList">DataAwsccS3StorageLensGroupFilterMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchObjectAge">matchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchObjectSize">matchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.or">or</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference">DataAwsccS3StorageLensGroupFilterOrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter">DataAwsccS3StorageLensGroupFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.and"></a>

```typescript
public readonly and: DataAwsccS3StorageLensGroupFilterAndOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference">DataAwsccS3StorageLensGroupFilterAndOutputReference</a>

---

##### `matchAnyPrefix`<sup>Required</sup> <a name="matchAnyPrefix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnyPrefix"></a>

```typescript
public readonly matchAnyPrefix: string[];
```

- *Type:* string[]

---

##### `matchAnySuffix`<sup>Required</sup> <a name="matchAnySuffix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnySuffix"></a>

```typescript
public readonly matchAnySuffix: string[];
```

- *Type:* string[]

---

##### `matchAnyTag`<sup>Required</sup> <a name="matchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnyTag"></a>

```typescript
public readonly matchAnyTag: DataAwsccS3StorageLensGroupFilterMatchAnyTagList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList">DataAwsccS3StorageLensGroupFilterMatchAnyTagList</a>

---

##### `matchObjectAge`<sup>Required</sup> <a name="matchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchObjectAge"></a>

```typescript
public readonly matchObjectAge: DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference</a>

---

##### `matchObjectSize`<sup>Required</sup> <a name="matchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchObjectSize"></a>

```typescript
public readonly matchObjectSize: DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.or"></a>

```typescript
public readonly or: DataAwsccS3StorageLensGroupFilterOrOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference">DataAwsccS3StorageLensGroupFilterOrOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3StorageLensGroupFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter">DataAwsccS3StorageLensGroupFilter</a>

---


### DataAwsccS3StorageLensGroupTagsList <a name="DataAwsccS3StorageLensGroupTagsList" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.get"></a>

```typescript
public get(index: number): DataAwsccS3StorageLensGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3StorageLensGroupTagsOutputReference <a name="DataAwsccS3StorageLensGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3StorageLensGroup } from '@cdktn/provider-awscc'

new dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags">DataAwsccS3StorageLensGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3StorageLensGroupTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags">DataAwsccS3StorageLensGroupTags</a>

---



