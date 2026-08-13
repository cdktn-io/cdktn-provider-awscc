# `dataAwsccInvoicingInvoiceUnit` Submodule <a name="`dataAwsccInvoicingInvoiceUnit` Submodule" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInvoicingInvoiceUnit <a name="DataAwsccInvoicingInvoiceUnit" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/invoicing_invoice_unit awscc_invoicing_invoice_unit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer"></a>

```typescript
import { dataAwsccInvoicingInvoiceUnit } from '@cdktn/provider-awscc'

new dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit(scope: Construct, id: string, config: DataAwsccInvoicingInvoiceUnitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig">DataAwsccInvoicingInvoiceUnitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig">DataAwsccInvoicingInvoiceUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInvoicingInvoiceUnit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isConstruct"></a>

```typescript
import { dataAwsccInvoicingInvoiceUnit } from '@cdktn/provider-awscc'

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformElement"></a>

```typescript
import { dataAwsccInvoicingInvoiceUnit } from '@cdktn/provider-awscc'

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformDataSource"></a>

```typescript
import { dataAwsccInvoicingInvoiceUnit } from '@cdktn/provider-awscc'

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generateConfigForImport"></a>

```typescript
import { dataAwsccInvoicingInvoiceUnit } from '@cdktn/provider-awscc'

dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccInvoicingInvoiceUnit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccInvoicingInvoiceUnit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccInvoicingInvoiceUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/invoicing_invoice_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInvoicingInvoiceUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.invoiceReceiver">invoiceReceiver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.invoiceUnitArn">invoiceUnitArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.lastModified">lastModified</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.resourceTags">resourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList">DataAwsccInvoicingInvoiceUnitResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference">DataAwsccInvoicingInvoiceUnitRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.taxInheritanceDisabled">taxInheritanceDisabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `invoiceReceiver`<sup>Required</sup> <a name="invoiceReceiver" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.invoiceReceiver"></a>

```typescript
public readonly invoiceReceiver: string;
```

- *Type:* string

---

##### `invoiceUnitArn`<sup>Required</sup> <a name="invoiceUnitArn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.invoiceUnitArn"></a>

```typescript
public readonly invoiceUnitArn: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.lastModified"></a>

```typescript
public readonly lastModified: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.resourceTags"></a>

```typescript
public readonly resourceTags: DataAwsccInvoicingInvoiceUnitResourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList">DataAwsccInvoicingInvoiceUnitResourceTagsList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.rule"></a>

```typescript
public readonly rule: DataAwsccInvoicingInvoiceUnitRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference">DataAwsccInvoicingInvoiceUnitRuleOutputReference</a>

---

##### `taxInheritanceDisabled`<sup>Required</sup> <a name="taxInheritanceDisabled" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.taxInheritanceDisabled"></a>

```typescript
public readonly taxInheritanceDisabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInvoicingInvoiceUnitConfig <a name="DataAwsccInvoicingInvoiceUnitConfig" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.Initializer"></a>

```typescript
import { dataAwsccInvoicingInvoiceUnit } from '@cdktn/provider-awscc'

const dataAwsccInvoicingInvoiceUnitConfig: dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/invoicing_invoice_unit#id DataAwsccInvoicingInvoiceUnit#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInvoicingInvoiceUnitResourceTags <a name="DataAwsccInvoicingInvoiceUnitResourceTags" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTags.Initializer"></a>

```typescript
import { dataAwsccInvoicingInvoiceUnit } from '@cdktn/provider-awscc'

const dataAwsccInvoicingInvoiceUnitResourceTags: dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTags = { ... }
```


### DataAwsccInvoicingInvoiceUnitRule <a name="DataAwsccInvoicingInvoiceUnitRule" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRule.Initializer"></a>

```typescript
import { dataAwsccInvoicingInvoiceUnit } from '@cdktn/provider-awscc'

const dataAwsccInvoicingInvoiceUnitRule: dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRule = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInvoicingInvoiceUnitResourceTagsList <a name="DataAwsccInvoicingInvoiceUnitResourceTagsList" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer"></a>

```typescript
import { dataAwsccInvoicingInvoiceUnit } from '@cdktn/provider-awscc'

new dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference <a name="DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccInvoicingInvoiceUnit } from '@cdktn/provider-awscc'

new dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTags">DataAwsccInvoicingInvoiceUnitResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInvoicingInvoiceUnitResourceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitResourceTags">DataAwsccInvoicingInvoiceUnitResourceTags</a>

---


### DataAwsccInvoicingInvoiceUnitRuleOutputReference <a name="DataAwsccInvoicingInvoiceUnitRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccInvoicingInvoiceUnit } from '@cdktn/provider-awscc'

new dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts">linkedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRule">DataAwsccInvoicingInvoiceUnitRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkedAccounts`<sup>Required</sup> <a name="linkedAccounts" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts"></a>

```typescript
public readonly linkedAccounts: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInvoicingInvoiceUnitRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingInvoiceUnit.DataAwsccInvoicingInvoiceUnitRule">DataAwsccInvoicingInvoiceUnitRule</a>

---



