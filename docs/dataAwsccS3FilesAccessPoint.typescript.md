# `dataAwsccS3FilesAccessPoint` Submodule <a name="`dataAwsccS3FilesAccessPoint` Submodule" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3FilesAccessPoint <a name="DataAwsccS3FilesAccessPoint" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3files_access_point awscc_s3files_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.Initializer"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

new dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint(scope: Construct, id: string, config: DataAwsccS3FilesAccessPointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig">DataAwsccS3FilesAccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig">DataAwsccS3FilesAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3FilesAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.isConstruct"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.isTerraformElement"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.generateConfigForImport"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccS3FilesAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccS3FilesAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccS3FilesAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3files_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3FilesAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.accessPointArn">accessPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.accessPointId">accessPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.posixUser">posixUser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference">DataAwsccS3FilesAccessPointPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.rootDirectory">rootDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference">DataAwsccS3FilesAccessPointRootDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList">DataAwsccS3FilesAccessPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessPointArn`<sup>Required</sup> <a name="accessPointArn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.accessPointArn"></a>

```typescript
public readonly accessPointArn: string;
```

- *Type:* string

---

##### `accessPointId`<sup>Required</sup> <a name="accessPointId" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.accessPointId"></a>

```typescript
public readonly accessPointId: string;
```

- *Type:* string

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `posixUser`<sup>Required</sup> <a name="posixUser" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.posixUser"></a>

```typescript
public readonly posixUser: DataAwsccS3FilesAccessPointPosixUserOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference">DataAwsccS3FilesAccessPointPosixUserOutputReference</a>

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: DataAwsccS3FilesAccessPointRootDirectoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference">DataAwsccS3FilesAccessPointRootDirectoryOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.tags"></a>

```typescript
public readonly tags: DataAwsccS3FilesAccessPointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList">DataAwsccS3FilesAccessPointTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3FilesAccessPointConfig <a name="DataAwsccS3FilesAccessPointConfig" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.Initializer"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

const dataAwsccS3FilesAccessPointConfig: dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3files_access_point#id DataAwsccS3FilesAccessPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3FilesAccessPointPosixUser <a name="DataAwsccS3FilesAccessPointPosixUser" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUser.Initializer"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

const dataAwsccS3FilesAccessPointPosixUser: dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUser = { ... }
```


### DataAwsccS3FilesAccessPointRootDirectory <a name="DataAwsccS3FilesAccessPointRootDirectory" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectory.Initializer"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

const dataAwsccS3FilesAccessPointRootDirectory: dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectory = { ... }
```


### DataAwsccS3FilesAccessPointRootDirectoryCreationPermissions <a name="DataAwsccS3FilesAccessPointRootDirectoryCreationPermissions" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissions.Initializer"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

const dataAwsccS3FilesAccessPointRootDirectoryCreationPermissions: dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissions = { ... }
```


### DataAwsccS3FilesAccessPointTags <a name="DataAwsccS3FilesAccessPointTags" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTags.Initializer"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

const dataAwsccS3FilesAccessPointTags: dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3FilesAccessPointPosixUserOutputReference <a name="DataAwsccS3FilesAccessPointPosixUserOutputReference" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

new dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.property.gid">gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.property.secondaryGids">secondaryGids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUser">DataAwsccS3FilesAccessPointPosixUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

---

##### `secondaryGids`<sup>Required</sup> <a name="secondaryGids" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```typescript
public readonly secondaryGids: string[];
```

- *Type:* string[]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3FilesAccessPointPosixUser;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointPosixUser">DataAwsccS3FilesAccessPointPosixUser</a>

---


### DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference <a name="DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

new dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid">ownerGid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid">ownerUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsccS3FilesAccessPointRootDirectoryCreationPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ownerGid`<sup>Required</sup> <a name="ownerGid" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid"></a>

```typescript
public readonly ownerGid: string;
```

- *Type:* string

---

##### `ownerUid`<sup>Required</sup> <a name="ownerUid" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid"></a>

```typescript
public readonly ownerUid: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3FilesAccessPointRootDirectoryCreationPermissions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsccS3FilesAccessPointRootDirectoryCreationPermissions</a>

---


### DataAwsccS3FilesAccessPointRootDirectoryOutputReference <a name="DataAwsccS3FilesAccessPointRootDirectoryOutputReference" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

new dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions">creationPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference">DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectory">DataAwsccS3FilesAccessPointRootDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creationPermissions`<sup>Required</sup> <a name="creationPermissions" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions"></a>

```typescript
public readonly creationPermissions: DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference">DataAwsccS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3FilesAccessPointRootDirectory;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointRootDirectory">DataAwsccS3FilesAccessPointRootDirectory</a>

---


### DataAwsccS3FilesAccessPointTagsList <a name="DataAwsccS3FilesAccessPointTagsList" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.Initializer"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

new dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.get"></a>

```typescript
public get(index: number): DataAwsccS3FilesAccessPointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccS3FilesAccessPointTagsOutputReference <a name="DataAwsccS3FilesAccessPointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3FilesAccessPoint } from '@cdktn/provider-awscc'

new dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTags">DataAwsccS3FilesAccessPointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3FilesAccessPointTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesAccessPoint.DataAwsccS3FilesAccessPointTags">DataAwsccS3FilesAccessPointTags</a>

---



