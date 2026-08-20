# `dataAwsccPcaconnectoradTemplateGroupAccessControlEntry` Submodule <a name="`dataAwsccPcaconnectoradTemplateGroupAccessControlEntry` Submodule" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcaconnectoradTemplateGroupAccessControlEntry <a name="DataAwsccPcaconnectoradTemplateGroupAccessControlEntry" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/pcaconnectorad_template_group_access_control_entry awscc_pcaconnectorad_template_group_access_control_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry(scope: Construct, id: string, config: DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig">DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig">DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isConstruct"></a>

```typescript
import { dataAwsccPcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement"></a>

```typescript
import { dataAwsccPcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformDataSource"></a>

```typescript
import { dataAwsccPcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport"></a>

```typescript
import { dataAwsccPcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccPcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccPcaconnectoradTemplateGroupAccessControlEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccPcaconnectoradTemplateGroupAccessControlEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/pcaconnectorad_template_group_access_control_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcaconnectoradTemplateGroupAccessControlEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.accessRights">accessRights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName">groupDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier">groupSecurityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.templateArn">templateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessRights`<sup>Required</sup> <a name="accessRights" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.accessRights"></a>

```typescript
public readonly accessRights: DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a>

---

##### `groupDisplayName`<sup>Required</sup> <a name="groupDisplayName" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName"></a>

```typescript
public readonly groupDisplayName: string;
```

- *Type:* string

---

##### `groupSecurityIdentifier`<sup>Required</sup> <a name="groupSecurityIdentifier" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier"></a>

```typescript
public readonly groupSecurityIdentifier: string;
```

- *Type:* string

---

##### `templateArn`<sup>Required</sup> <a name="templateArn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.templateArn"></a>

```typescript
public readonly templateArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights <a name="DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights: dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights = { ... }
```


### DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig <a name="DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig: dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/pcaconnectorad_template_group_access_control_entry#id DataAwsccPcaconnectoradTemplateGroupAccessControlEntry#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference <a name="DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll">autoEnroll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll">enroll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights">DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoEnroll`<sup>Required</sup> <a name="autoEnroll" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll"></a>

```typescript
public readonly autoEnroll: string;
```

- *Type:* string

---

##### `enroll`<sup>Required</sup> <a name="enroll" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll"></a>

```typescript
public readonly enroll: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights">DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---



