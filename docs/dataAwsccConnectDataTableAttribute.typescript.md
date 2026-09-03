# `dataAwsccConnectDataTableAttribute` Submodule <a name="`dataAwsccConnectDataTableAttribute` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectDataTableAttribute <a name="DataAwsccConnectDataTableAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/connect_data_table_attribute awscc_connect_data_table_attribute}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer"></a>

```typescript
import { dataAwsccConnectDataTableAttribute } from '@cdktn/provider-awscc'

new dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute(scope: Construct, id: string, config: DataAwsccConnectDataTableAttributeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig">DataAwsccConnectDataTableAttributeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig">DataAwsccConnectDataTableAttributeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectDataTableAttribute resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isConstruct"></a>

```typescript
import { dataAwsccConnectDataTableAttribute } from '@cdktn/provider-awscc'

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformElement"></a>

```typescript
import { dataAwsccConnectDataTableAttribute } from '@cdktn/provider-awscc'

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformDataSource"></a>

```typescript
import { dataAwsccConnectDataTableAttribute } from '@cdktn/provider-awscc'

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generateConfigForImport"></a>

```typescript
import { dataAwsccConnectDataTableAttribute } from '@cdktn/provider-awscc'

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccConnectDataTableAttribute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConnectDataTableAttribute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConnectDataTableAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/connect_data_table_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectDataTableAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.attributeId">attributeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.dataTableArn">dataTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lastModifiedRegion">lastModifiedRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lastModifiedTime">lastModifiedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lockVersion">lockVersion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference">DataAwsccConnectDataTableAttributeLockVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.primary">primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference">DataAwsccConnectDataTableAttributeValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `attributeId`<sup>Required</sup> <a name="attributeId" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.attributeId"></a>

```typescript
public readonly attributeId: string;
```

- *Type:* string

---

##### `dataTableArn`<sup>Required</sup> <a name="dataTableArn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.dataTableArn"></a>

```typescript
public readonly dataTableArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `lastModifiedRegion`<sup>Required</sup> <a name="lastModifiedRegion" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lastModifiedRegion"></a>

```typescript
public readonly lastModifiedRegion: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: number;
```

- *Type:* number

---

##### `lockVersion`<sup>Required</sup> <a name="lockVersion" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lockVersion"></a>

```typescript
public readonly lockVersion: DataAwsccConnectDataTableAttributeLockVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference">DataAwsccConnectDataTableAttributeLockVersionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.validation"></a>

```typescript
public readonly validation: DataAwsccConnectDataTableAttributeValidationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference">DataAwsccConnectDataTableAttributeValidationOutputReference</a>

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectDataTableAttributeConfig <a name="DataAwsccConnectDataTableAttributeConfig" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.Initializer"></a>

```typescript
import { dataAwsccConnectDataTableAttribute } from '@cdktn/provider-awscc'

const dataAwsccConnectDataTableAttributeConfig: dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/connect_data_table_attribute#id DataAwsccConnectDataTableAttribute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectDataTableAttributeLockVersion <a name="DataAwsccConnectDataTableAttributeLockVersion" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersion.Initializer"></a>

```typescript
import { dataAwsccConnectDataTableAttribute } from '@cdktn/provider-awscc'

const dataAwsccConnectDataTableAttributeLockVersion: dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersion = { ... }
```


### DataAwsccConnectDataTableAttributeValidation <a name="DataAwsccConnectDataTableAttributeValidation" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidation.Initializer"></a>

```typescript
import { dataAwsccConnectDataTableAttribute } from '@cdktn/provider-awscc'

const dataAwsccConnectDataTableAttributeValidation: dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidation = { ... }
```


### DataAwsccConnectDataTableAttributeValidationEnum <a name="DataAwsccConnectDataTableAttributeValidationEnum" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnum"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnum.Initializer"></a>

```typescript
import { dataAwsccConnectDataTableAttribute } from '@cdktn/provider-awscc'

const dataAwsccConnectDataTableAttributeValidationEnum: dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnum = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectDataTableAttributeLockVersionOutputReference <a name="DataAwsccConnectDataTableAttributeLockVersionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectDataTableAttribute } from '@cdktn/provider-awscc'

new dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.dataTable">dataTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersion">DataAwsccConnectDataTableAttributeLockVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `dataTable`<sup>Required</sup> <a name="dataTable" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.dataTable"></a>

```typescript
public readonly dataTable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectDataTableAttributeLockVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersion">DataAwsccConnectDataTableAttributeLockVersion</a>

---


### DataAwsccConnectDataTableAttributeValidationEnumOutputReference <a name="DataAwsccConnectDataTableAttributeValidationEnumOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectDataTableAttribute } from '@cdktn/provider-awscc'

new dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.strict">strict</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnum">DataAwsccConnectDataTableAttributeValidationEnum</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `strict`<sup>Required</sup> <a name="strict" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.strict"></a>

```typescript
public readonly strict: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectDataTableAttributeValidationEnum;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnum">DataAwsccConnectDataTableAttributeValidationEnum</a>

---


### DataAwsccConnectDataTableAttributeValidationOutputReference <a name="DataAwsccConnectDataTableAttributeValidationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectDataTableAttribute } from '@cdktn/provider-awscc'

new dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.enum">enum</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference">DataAwsccConnectDataTableAttributeValidationEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum">exclusiveMaximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum">exclusiveMinimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.maxValues">maxValues</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.minValues">minValues</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.multipleOf">multipleOf</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidation">DataAwsccConnectDataTableAttributeValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.enum"></a>

```typescript
public readonly enum: DataAwsccConnectDataTableAttributeValidationEnumOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference">DataAwsccConnectDataTableAttributeValidationEnumOutputReference</a>

---

##### `exclusiveMaximum`<sup>Required</sup> <a name="exclusiveMaximum" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum"></a>

```typescript
public readonly exclusiveMaximum: number;
```

- *Type:* number

---

##### `exclusiveMinimum`<sup>Required</sup> <a name="exclusiveMinimum" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum"></a>

```typescript
public readonly exclusiveMinimum: number;
```

- *Type:* number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `maxValues`<sup>Required</sup> <a name="maxValues" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.maxValues"></a>

```typescript
public readonly maxValues: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `minValues`<sup>Required</sup> <a name="minValues" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.minValues"></a>

```typescript
public readonly minValues: number;
```

- *Type:* number

---

##### `multipleOf`<sup>Required</sup> <a name="multipleOf" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.multipleOf"></a>

```typescript
public readonly multipleOf: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectDataTableAttributeValidation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidation">DataAwsccConnectDataTableAttributeValidation</a>

---



