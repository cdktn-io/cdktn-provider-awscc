# `dataAwsccIotfleetwiseSignalCatalog` Submodule <a name="`dataAwsccIotfleetwiseSignalCatalog` Submodule" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotfleetwiseSignalCatalog <a name="DataAwsccIotfleetwiseSignalCatalog" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotfleetwise_signal_catalog awscc_iotfleetwise_signal_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog(scope: Construct, id: string, config: DataAwsccIotfleetwiseSignalCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig">DataAwsccIotfleetwiseSignalCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig">DataAwsccIotfleetwiseSignalCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotfleetwiseSignalCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isConstruct"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformElement"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generateConfigForImport"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotfleetwiseSignalCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotfleetwiseSignalCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotfleetwiseSignalCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotfleetwise_signal_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotfleetwiseSignalCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.lastModificationTime">lastModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.nodeCounts">nodeCounts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference">DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.nodes">nodes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList">DataAwsccIotfleetwiseSignalCatalogNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList">DataAwsccIotfleetwiseSignalCatalogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `lastModificationTime`<sup>Required</sup> <a name="lastModificationTime" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.lastModificationTime"></a>

```typescript
public readonly lastModificationTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeCounts`<sup>Required</sup> <a name="nodeCounts" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.nodeCounts"></a>

```typescript
public readonly nodeCounts: DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference">DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.nodes"></a>

```typescript
public readonly nodes: DataAwsccIotfleetwiseSignalCatalogNodesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList">DataAwsccIotfleetwiseSignalCatalogNodesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotfleetwiseSignalCatalogTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList">DataAwsccIotfleetwiseSignalCatalogTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotfleetwiseSignalCatalogConfig <a name="DataAwsccIotfleetwiseSignalCatalogConfig" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseSignalCatalogConfig: dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotfleetwise_signal_catalog#id DataAwsccIotfleetwiseSignalCatalog#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotfleetwiseSignalCatalogNodeCounts <a name="DataAwsccIotfleetwiseSignalCatalogNodeCounts" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCounts.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseSignalCatalogNodeCounts: dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCounts = { ... }
```


### DataAwsccIotfleetwiseSignalCatalogNodes <a name="DataAwsccIotfleetwiseSignalCatalogNodes" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodes.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseSignalCatalogNodes: dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodes = { ... }
```


### DataAwsccIotfleetwiseSignalCatalogNodesActuator <a name="DataAwsccIotfleetwiseSignalCatalogNodesActuator" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuator.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseSignalCatalogNodesActuator: dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuator = { ... }
```


### DataAwsccIotfleetwiseSignalCatalogNodesAttribute <a name="DataAwsccIotfleetwiseSignalCatalogNodesAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttribute.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseSignalCatalogNodesAttribute: dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttribute = { ... }
```


### DataAwsccIotfleetwiseSignalCatalogNodesBranch <a name="DataAwsccIotfleetwiseSignalCatalogNodesBranch" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranch.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseSignalCatalogNodesBranch: dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranch = { ... }
```


### DataAwsccIotfleetwiseSignalCatalogNodesSensor <a name="DataAwsccIotfleetwiseSignalCatalogNodesSensor" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensor.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseSignalCatalogNodesSensor: dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensor = { ... }
```


### DataAwsccIotfleetwiseSignalCatalogTags <a name="DataAwsccIotfleetwiseSignalCatalogTags" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTags.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseSignalCatalogTags: dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalActuators">totalActuators</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalAttributes">totalAttributes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalBranches">totalBranches</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalNodes">totalNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalSensors">totalSensors</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCounts">DataAwsccIotfleetwiseSignalCatalogNodeCounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `totalActuators`<sup>Required</sup> <a name="totalActuators" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalActuators"></a>

```typescript
public readonly totalActuators: number;
```

- *Type:* number

---

##### `totalAttributes`<sup>Required</sup> <a name="totalAttributes" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalAttributes"></a>

```typescript
public readonly totalAttributes: number;
```

- *Type:* number

---

##### `totalBranches`<sup>Required</sup> <a name="totalBranches" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalBranches"></a>

```typescript
public readonly totalBranches: number;
```

- *Type:* number

---

##### `totalNodes`<sup>Required</sup> <a name="totalNodes" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalNodes"></a>

```typescript
public readonly totalNodes: number;
```

- *Type:* number

---

##### `totalSensors`<sup>Required</sup> <a name="totalSensors" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalSensors"></a>

```typescript
public readonly totalSensors: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotfleetwiseSignalCatalogNodeCounts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodeCounts">DataAwsccIotfleetwiseSignalCatalogNodeCounts</a>

---


### DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValue">assignedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuator">DataAwsccIotfleetwiseSignalCatalogNodesActuator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `assignedValue`<sup>Required</sup> <a name="assignedValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValue"></a>

```typescript
public readonly assignedValue: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotfleetwiseSignalCatalogNodesActuator;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuator">DataAwsccIotfleetwiseSignalCatalogNodesActuator</a>

---


### DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValue">assignedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttribute">DataAwsccIotfleetwiseSignalCatalogNodesAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `assignedValue`<sup>Required</sup> <a name="assignedValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValue"></a>

```typescript
public readonly assignedValue: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotfleetwiseSignalCatalogNodesAttribute;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttribute">DataAwsccIotfleetwiseSignalCatalogNodesAttribute</a>

---


### DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranch">DataAwsccIotfleetwiseSignalCatalogNodesBranch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotfleetwiseSignalCatalogNodesBranch;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranch">DataAwsccIotfleetwiseSignalCatalogNodesBranch</a>

---


### DataAwsccIotfleetwiseSignalCatalogNodesList <a name="DataAwsccIotfleetwiseSignalCatalogNodesList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.get"></a>

```typescript
public get(index: number): DataAwsccIotfleetwiseSignalCatalogNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotfleetwiseSignalCatalogNodesOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogNodesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.actuator">actuator</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.attribute">attribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.branch">branch</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.sensor">sensor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodes">DataAwsccIotfleetwiseSignalCatalogNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actuator`<sup>Required</sup> <a name="actuator" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.actuator"></a>

```typescript
public readonly actuator: DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesActuatorOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.attribute"></a>

```typescript
public readonly attribute: DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesAttributeOutputReference</a>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.branch"></a>

```typescript
public readonly branch: DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesBranchOutputReference</a>

---

##### `sensor`<sup>Required</sup> <a name="sensor" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.sensor"></a>

```typescript
public readonly sensor: DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference">DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotfleetwiseSignalCatalogNodes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodes">DataAwsccIotfleetwiseSignalCatalogNodes</a>

---


### DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensor">DataAwsccIotfleetwiseSignalCatalogNodesSensor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotfleetwiseSignalCatalogNodesSensor;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogNodesSensor">DataAwsccIotfleetwiseSignalCatalogNodesSensor</a>

---


### DataAwsccIotfleetwiseSignalCatalogTagsList <a name="DataAwsccIotfleetwiseSignalCatalogTagsList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotfleetwiseSignalCatalogTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotfleetwiseSignalCatalogTagsOutputReference <a name="DataAwsccIotfleetwiseSignalCatalogTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTags">DataAwsccIotfleetwiseSignalCatalogTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotfleetwiseSignalCatalogTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseSignalCatalog.DataAwsccIotfleetwiseSignalCatalogTags">DataAwsccIotfleetwiseSignalCatalogTags</a>

---



