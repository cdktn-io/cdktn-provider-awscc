# `dataAwsccInvoicingProcurementPortalPreference` Submodule <a name="`dataAwsccInvoicingProcurementPortalPreference` Submodule" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInvoicingProcurementPortalPreference <a name="DataAwsccInvoicingProcurementPortalPreference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/invoicing_procurement_portal_preference awscc_invoicing_procurement_portal_preference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference(scope: Construct, id: string, config: DataAwsccInvoicingProcurementPortalPreferenceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig">DataAwsccInvoicingProcurementPortalPreferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig">DataAwsccInvoicingProcurementPortalPreferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isConstruct"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformElement"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformDataSource"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccInvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccInvoicingProcurementPortalPreference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccInvoicingProcurementPortalPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/invoicing_procurement_portal_preference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInvoicingProcurementPortalPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.buyerDomain">buyerDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.buyerIdentifier">buyerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.contacts">contacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList">DataAwsccInvoicingProcurementPortalPreferenceContactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.createDate">createDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled">einvoiceDeliveryEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference">einvoiceDeliveryPreference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus">einvoiceDeliveryPreferenceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.lastUpdateDate">lastUpdateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint">procurementPortalInstanceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalName">procurementPortalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn">procurementPortalPreferenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalSharedSecret">procurementPortalSharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled">purchaseOrderRetrievalEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint">purchaseOrderRetrievalEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus">purchaseOrderRetrievalPreferenceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.selector">selector</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference">DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.supplierDomain">supplierDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.supplierIdentifier">supplierIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList">DataAwsccInvoicingProcurementPortalPreferenceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.testEnvPreference">testEnvPreference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `buyerDomain`<sup>Required</sup> <a name="buyerDomain" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.buyerDomain"></a>

```typescript
public readonly buyerDomain: string;
```

- *Type:* string

---

##### `buyerIdentifier`<sup>Required</sup> <a name="buyerIdentifier" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.buyerIdentifier"></a>

```typescript
public readonly buyerIdentifier: string;
```

- *Type:* string

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.contacts"></a>

```typescript
public readonly contacts: DataAwsccInvoicingProcurementPortalPreferenceContactsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList">DataAwsccInvoicingProcurementPortalPreferenceContactsList</a>

---

##### `createDate`<sup>Required</sup> <a name="createDate" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.createDate"></a>

```typescript
public readonly createDate: string;
```

- *Type:* string

---

##### `einvoiceDeliveryEnabled`<sup>Required</sup> <a name="einvoiceDeliveryEnabled" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled"></a>

```typescript
public readonly einvoiceDeliveryEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `einvoiceDeliveryPreference`<sup>Required</sup> <a name="einvoiceDeliveryPreference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference"></a>

```typescript
public readonly einvoiceDeliveryPreference: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a>

---

##### `einvoiceDeliveryPreferenceStatus`<sup>Required</sup> <a name="einvoiceDeliveryPreferenceStatus" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus"></a>

```typescript
public readonly einvoiceDeliveryPreferenceStatus: string;
```

- *Type:* string

---

##### `lastUpdateDate`<sup>Required</sup> <a name="lastUpdateDate" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.lastUpdateDate"></a>

```typescript
public readonly lastUpdateDate: string;
```

- *Type:* string

---

##### `procurementPortalInstanceEndpoint`<sup>Required</sup> <a name="procurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint"></a>

```typescript
public readonly procurementPortalInstanceEndpoint: string;
```

- *Type:* string

---

##### `procurementPortalName`<sup>Required</sup> <a name="procurementPortalName" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalName"></a>

```typescript
public readonly procurementPortalName: string;
```

- *Type:* string

---

##### `procurementPortalPreferenceArn`<sup>Required</sup> <a name="procurementPortalPreferenceArn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn"></a>

```typescript
public readonly procurementPortalPreferenceArn: string;
```

- *Type:* string

---

##### `procurementPortalSharedSecret`<sup>Required</sup> <a name="procurementPortalSharedSecret" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalSharedSecret"></a>

```typescript
public readonly procurementPortalSharedSecret: string;
```

- *Type:* string

---

##### `purchaseOrderRetrievalEnabled`<sup>Required</sup> <a name="purchaseOrderRetrievalEnabled" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled"></a>

```typescript
public readonly purchaseOrderRetrievalEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `purchaseOrderRetrievalEndpoint`<sup>Required</sup> <a name="purchaseOrderRetrievalEndpoint" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint"></a>

```typescript
public readonly purchaseOrderRetrievalEndpoint: string;
```

- *Type:* string

---

##### `purchaseOrderRetrievalPreferenceStatus`<sup>Required</sup> <a name="purchaseOrderRetrievalPreferenceStatus" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus"></a>

```typescript
public readonly purchaseOrderRetrievalPreferenceStatus: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.selector"></a>

```typescript
public readonly selector: DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference">DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference</a>

---

##### `supplierDomain`<sup>Required</sup> <a name="supplierDomain" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.supplierDomain"></a>

```typescript
public readonly supplierDomain: string;
```

- *Type:* string

---

##### `supplierIdentifier`<sup>Required</sup> <a name="supplierIdentifier" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.supplierIdentifier"></a>

```typescript
public readonly supplierIdentifier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.tags"></a>

```typescript
public readonly tags: DataAwsccInvoicingProcurementPortalPreferenceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList">DataAwsccInvoicingProcurementPortalPreferenceTagsList</a>

---

##### `testEnvPreference`<sup>Required</sup> <a name="testEnvPreference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.testEnvPreference"></a>

```typescript
public readonly testEnvPreference: DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInvoicingProcurementPortalPreferenceConfig <a name="DataAwsccInvoicingProcurementPortalPreferenceConfig" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const dataAwsccInvoicingProcurementPortalPreferenceConfig: dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/invoicing_procurement_portal_preference#id DataAwsccInvoicingProcurementPortalPreference#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInvoicingProcurementPortalPreferenceContacts <a name="DataAwsccInvoicingProcurementPortalPreferenceContacts" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const dataAwsccInvoicingProcurementPortalPreferenceContacts: dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts = { ... }
```


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const dataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference: dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference = { ... }
```


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const dataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources: dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources = { ... }
```


### DataAwsccInvoicingProcurementPortalPreferenceSelector <a name="DataAwsccInvoicingProcurementPortalPreferenceSelector" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const dataAwsccInvoicingProcurementPortalPreferenceSelector: dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector = { ... }
```


### DataAwsccInvoicingProcurementPortalPreferenceTags <a name="DataAwsccInvoicingProcurementPortalPreferenceTags" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const dataAwsccInvoicingProcurementPortalPreferenceTags: dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags = { ... }
```


### DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference <a name="DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

const dataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference: dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInvoicingProcurementPortalPreferenceContactsList <a name="DataAwsccInvoicingProcurementPortalPreferenceContactsList" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.get"></a>

```typescript
public get(index: number): DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts">DataAwsccInvoicingProcurementPortalPreferenceContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInvoicingProcurementPortalPreferenceContacts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts">DataAwsccInvoicingProcurementPortalPreferenceContacts</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod">connectionTestingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate">einvoiceDeliveryActivationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes">einvoiceDeliveryAttachmentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes">einvoiceDeliveryDocumentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources">purchaseOrderDataSources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionTestingMethod`<sup>Required</sup> <a name="connectionTestingMethod" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod"></a>

```typescript
public readonly connectionTestingMethod: string;
```

- *Type:* string

---

##### `einvoiceDeliveryActivationDate`<sup>Required</sup> <a name="einvoiceDeliveryActivationDate" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate"></a>

```typescript
public readonly einvoiceDeliveryActivationDate: string;
```

- *Type:* string

---

##### `einvoiceDeliveryAttachmentTypes`<sup>Required</sup> <a name="einvoiceDeliveryAttachmentTypes" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes"></a>

```typescript
public readonly einvoiceDeliveryAttachmentTypes: string[];
```

- *Type:* string[]

---

##### `einvoiceDeliveryDocumentTypes`<sup>Required</sup> <a name="einvoiceDeliveryDocumentTypes" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes"></a>

```typescript
public readonly einvoiceDeliveryDocumentTypes: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `purchaseOrderDataSources`<sup>Required</sup> <a name="purchaseOrderDataSources" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources"></a>

```typescript
public readonly purchaseOrderDataSources: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get"></a>

```typescript
public get(index: number): DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType">einvoiceDeliveryDocumentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType">purchaseOrderDataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `einvoiceDeliveryDocumentType`<sup>Required</sup> <a name="einvoiceDeliveryDocumentType" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType"></a>

```typescript
public readonly einvoiceDeliveryDocumentType: string;
```

- *Type:* string

---

##### `purchaseOrderDataSourceType`<sup>Required</sup> <a name="purchaseOrderDataSourceType" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType"></a>

```typescript
public readonly purchaseOrderDataSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns">invoiceUnitArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector">DataAwsccInvoicingProcurementPortalPreferenceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invoiceUnitArns`<sup>Required</sup> <a name="invoiceUnitArns" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns"></a>

```typescript
public readonly invoiceUnitArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInvoicingProcurementPortalPreferenceSelector;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector">DataAwsccInvoicingProcurementPortalPreferenceSelector</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceTagsList <a name="DataAwsccInvoicingProcurementPortalPreferenceTagsList" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags">DataAwsccInvoicingProcurementPortalPreferenceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInvoicingProcurementPortalPreferenceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags">DataAwsccInvoicingProcurementPortalPreferenceTags</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer"></a>

```typescript
import { dataAwsccInvoicingProcurementPortalPreference } from '@cdktn/provider-awscc'

new dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain">buyerDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier">buyerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint">procurementPortalInstanceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret">procurementPortalSharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain">supplierDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier">supplierIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference">DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buyerDomain`<sup>Required</sup> <a name="buyerDomain" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain"></a>

```typescript
public readonly buyerDomain: string;
```

- *Type:* string

---

##### `buyerIdentifier`<sup>Required</sup> <a name="buyerIdentifier" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier"></a>

```typescript
public readonly buyerIdentifier: string;
```

- *Type:* string

---

##### `procurementPortalInstanceEndpoint`<sup>Required</sup> <a name="procurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint"></a>

```typescript
public readonly procurementPortalInstanceEndpoint: string;
```

- *Type:* string

---

##### `procurementPortalSharedSecret`<sup>Required</sup> <a name="procurementPortalSharedSecret" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret"></a>

```typescript
public readonly procurementPortalSharedSecret: string;
```

- *Type:* string

---

##### `supplierDomain`<sup>Required</sup> <a name="supplierDomain" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain"></a>

```typescript
public readonly supplierDomain: string;
```

- *Type:* string

---

##### `supplierIdentifier`<sup>Required</sup> <a name="supplierIdentifier" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier"></a>

```typescript
public readonly supplierIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference">DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference</a>

---



