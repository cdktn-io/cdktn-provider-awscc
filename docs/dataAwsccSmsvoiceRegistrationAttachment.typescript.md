# `dataAwsccSmsvoiceRegistrationAttachment` Submodule <a name="`dataAwsccSmsvoiceRegistrationAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSmsvoiceRegistrationAttachment <a name="DataAwsccSmsvoiceRegistrationAttachment" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/smsvoice_registration_attachment awscc_smsvoice_registration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceRegistrationAttachment } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment(scope: Construct, id: string, config: DataAwsccSmsvoiceRegistrationAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig">DataAwsccSmsvoiceRegistrationAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig">DataAwsccSmsvoiceRegistrationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSmsvoiceRegistrationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.isConstruct"></a>

```typescript
import { dataAwsccSmsvoiceRegistrationAttachment } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.isTerraformElement"></a>

```typescript
import { dataAwsccSmsvoiceRegistrationAttachment } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.isTerraformDataSource"></a>

```typescript
import { dataAwsccSmsvoiceRegistrationAttachment } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.generateConfigForImport"></a>

```typescript
import { dataAwsccSmsvoiceRegistrationAttachment } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSmsvoiceRegistrationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSmsvoiceRegistrationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSmsvoiceRegistrationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/smsvoice_registration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSmsvoiceRegistrationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.attachmentBody">attachmentBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.attachmentStatus">attachmentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.attachmentUrl">attachmentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.registrationAttachmentArn">registrationAttachmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.registrationAttachmentId">registrationAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList">DataAwsccSmsvoiceRegistrationAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.uploadedAttachmentUrl">uploadedAttachmentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `attachmentBody`<sup>Required</sup> <a name="attachmentBody" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.attachmentBody"></a>

```typescript
public readonly attachmentBody: string;
```

- *Type:* string

---

##### `attachmentStatus`<sup>Required</sup> <a name="attachmentStatus" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.attachmentStatus"></a>

```typescript
public readonly attachmentStatus: string;
```

- *Type:* string

---

##### `attachmentUrl`<sup>Required</sup> <a name="attachmentUrl" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.attachmentUrl"></a>

```typescript
public readonly attachmentUrl: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `registrationAttachmentArn`<sup>Required</sup> <a name="registrationAttachmentArn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.registrationAttachmentArn"></a>

```typescript
public readonly registrationAttachmentArn: string;
```

- *Type:* string

---

##### `registrationAttachmentId`<sup>Required</sup> <a name="registrationAttachmentId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.registrationAttachmentId"></a>

```typescript
public readonly registrationAttachmentId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.tags"></a>

```typescript
public readonly tags: DataAwsccSmsvoiceRegistrationAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList">DataAwsccSmsvoiceRegistrationAttachmentTagsList</a>

---

##### `uploadedAttachmentUrl`<sup>Required</sup> <a name="uploadedAttachmentUrl" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.uploadedAttachmentUrl"></a>

```typescript
public readonly uploadedAttachmentUrl: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSmsvoiceRegistrationAttachmentConfig <a name="DataAwsccSmsvoiceRegistrationAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceRegistrationAttachment } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceRegistrationAttachmentConfig: dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/smsvoice_registration_attachment#id DataAwsccSmsvoiceRegistrationAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSmsvoiceRegistrationAttachmentTags <a name="DataAwsccSmsvoiceRegistrationAttachmentTags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTags.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceRegistrationAttachment } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceRegistrationAttachmentTags: dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSmsvoiceRegistrationAttachmentTagsList <a name="DataAwsccSmsvoiceRegistrationAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceRegistrationAttachment } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference <a name="DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceRegistrationAttachment } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTags">DataAwsccSmsvoiceRegistrationAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSmsvoiceRegistrationAttachmentTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRegistrationAttachment.DataAwsccSmsvoiceRegistrationAttachmentTags">DataAwsccSmsvoiceRegistrationAttachmentTags</a>

---



