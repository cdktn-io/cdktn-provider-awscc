# `dataAwsccCleanroomsConfiguredTableAssociation` Submodule <a name="`dataAwsccCleanroomsConfiguredTableAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsConfiguredTableAssociation <a name="DataAwsccCleanroomsConfiguredTableAssociation" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cleanrooms_configured_table_association awscc_cleanrooms_configured_table_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation(scope: Construct, id: string, config: DataAwsccCleanroomsConfiguredTableAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig">DataAwsccCleanroomsConfiguredTableAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig">DataAwsccCleanroomsConfiguredTableAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsConfiguredTableAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isConstruct"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCleanroomsConfiguredTableAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCleanroomsConfiguredTableAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCleanroomsConfiguredTableAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cleanrooms_configured_table_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsConfiguredTableAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRules">configuredTableAssociationAnalysisRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.configuredTableAssociationIdentifier">configuredTableAssociationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.configuredTableIdentifier">configuredTableIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.membershipIdentifier">membershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList">DataAwsccCleanroomsConfiguredTableAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configuredTableAssociationAnalysisRules`<sup>Required</sup> <a name="configuredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRules"></a>

```typescript
public readonly configuredTableAssociationAnalysisRules: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList</a>

---

##### `configuredTableAssociationIdentifier`<sup>Required</sup> <a name="configuredTableAssociationIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.configuredTableAssociationIdentifier"></a>

```typescript
public readonly configuredTableAssociationIdentifier: string;
```

- *Type:* string

---

##### `configuredTableIdentifier`<sup>Required</sup> <a name="configuredTableIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.configuredTableIdentifier"></a>

```typescript
public readonly configuredTableIdentifier: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.membershipIdentifier"></a>

```typescript
public readonly membershipIdentifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.tags"></a>

```typescript
public readonly tags: DataAwsccCleanroomsConfiguredTableAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList">DataAwsccCleanroomsConfiguredTableAssociationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsConfiguredTableAssociationConfig <a name="DataAwsccCleanroomsConfiguredTableAssociationConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

const dataAwsccCleanroomsConfiguredTableAssociationConfig: dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cleanrooms_configured_table_association#id DataAwsccCleanroomsConfiguredTableAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

const dataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules: dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules = { ... }
```


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

const dataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy: dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy = { ... }
```


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

const dataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1: dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 = { ... }
```


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

const dataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation: dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation = { ... }
```


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

const dataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom: dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom = { ... }
```


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

const dataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct: dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct = { ... }
```


### DataAwsccCleanroomsConfiguredTableAssociationTags <a name="DataAwsccCleanroomsConfiguredTableAssociationTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTags.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

const dataAwsccCleanroomsConfiguredTableAssociationTags: dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get"></a>

```typescript
public get(index: number): DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policy"></a>

```typescript
public readonly policy: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>

---


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1">v1</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `v1`<sup>Required</sup> <a name="v1" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1"></a>

```typescript
public readonly v1: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a>

---


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalyses">allowedAdditionalAnalyses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceivers">allowedResultReceivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAdditionalAnalyses`<sup>Required</sup> <a name="allowedAdditionalAnalyses" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalyses"></a>

```typescript
public readonly allowedAdditionalAnalyses: string[];
```

- *Type:* string[]

---

##### `allowedResultReceivers`<sup>Required</sup> <a name="allowedResultReceivers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceivers"></a>

```typescript
public readonly allowedResultReceivers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

---


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalyses">allowedAdditionalAnalyses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers">allowedResultReceivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAdditionalAnalyses`<sup>Required</sup> <a name="allowedAdditionalAnalyses" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalyses"></a>

```typescript
public readonly allowedAdditionalAnalyses: string[];
```

- *Type:* string[]

---

##### `allowedResultReceivers`<sup>Required</sup> <a name="allowedResultReceivers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers"></a>

```typescript
public readonly allowedResultReceivers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

---


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalyses">allowedAdditionalAnalyses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceivers">allowedResultReceivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAdditionalAnalyses`<sup>Required</sup> <a name="allowedAdditionalAnalyses" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalyses"></a>

```typescript
public readonly allowedAdditionalAnalyses: string[];
```

- *Type:* string[]

---

##### `allowedResultReceivers`<sup>Required</sup> <a name="allowedResultReceivers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceivers"></a>

```typescript
public readonly allowedResultReceivers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

---


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregation">aggregation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.list">list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```typescript
public readonly custom: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.list"></a>

```typescript
public readonly list: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

---


### DataAwsccCleanroomsConfiguredTableAssociationTagsList <a name="DataAwsccCleanroomsConfiguredTableAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCleanroomsConfiguredTableAssociation } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTags">DataAwsccCleanroomsConfiguredTableAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCleanroomsConfiguredTableAssociationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTags">DataAwsccCleanroomsConfiguredTableAssociationTags</a>

---



