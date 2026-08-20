# `dataAwsccGlobalacceleratorCrossAccountAttachment` Submodule <a name="`dataAwsccGlobalacceleratorCrossAccountAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlobalacceleratorCrossAccountAttachment <a name="DataAwsccGlobalacceleratorCrossAccountAttachment" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/globalaccelerator_cross_account_attachment awscc_globalaccelerator_cross_account_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

new dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment(scope: Construct, id: string, config: DataAwsccGlobalacceleratorCrossAccountAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig">DataAwsccGlobalacceleratorCrossAccountAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig">DataAwsccGlobalacceleratorCrossAccountAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlobalacceleratorCrossAccountAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isConstruct"></a>

```typescript
import { dataAwsccGlobalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformElement"></a>

```typescript
import { dataAwsccGlobalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformDataSource"></a>

```typescript
import { dataAwsccGlobalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport"></a>

```typescript
import { dataAwsccGlobalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccGlobalacceleratorCrossAccountAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGlobalacceleratorCrossAccountAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGlobalacceleratorCrossAccountAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/globalaccelerator_cross_account_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlobalacceleratorCrossAccountAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.attachmentArn">attachmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList">DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList">DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `attachmentArn`<sup>Required</sup> <a name="attachmentArn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.attachmentArn"></a>

```typescript
public readonly attachmentArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.resources"></a>

```typescript
public readonly resources: DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList">DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.tags"></a>

```typescript
public readonly tags: DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList">DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlobalacceleratorCrossAccountAttachmentConfig <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

const dataAwsccGlobalacceleratorCrossAccountAttachmentConfig: dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/globalaccelerator_cross_account_attachment#id DataAwsccGlobalacceleratorCrossAccountAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlobalacceleratorCrossAccountAttachmentResources <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentResources" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

const dataAwsccGlobalacceleratorCrossAccountAttachmentResources: dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources = { ... }
```


### DataAwsccGlobalacceleratorCrossAccountAttachmentTags <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentTags" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

const dataAwsccGlobalacceleratorCrossAccountAttachmentTags: dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

new dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.get"></a>

```typescript
public get(index: number): DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

new dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources">DataAwsccGlobalacceleratorCrossAccountAttachmentResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlobalacceleratorCrossAccountAttachmentResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources">DataAwsccGlobalacceleratorCrossAccountAttachmentResources</a>

---


### DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

new dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.get"></a>

```typescript
public get(index: number): DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlobalacceleratorCrossAccountAttachment } from '@cdktn/provider-awscc'

new dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags">DataAwsccGlobalacceleratorCrossAccountAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlobalacceleratorCrossAccountAttachmentTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags">DataAwsccGlobalacceleratorCrossAccountAttachmentTags</a>

---



