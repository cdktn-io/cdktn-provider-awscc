# `dataAwsccRedshiftQev2IdcApplication` Submodule <a name="`dataAwsccRedshiftQev2IdcApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftQev2IdcApplication <a name="DataAwsccRedshiftQev2IdcApplication" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/redshift_qev2_idc_application awscc_redshift_qev2_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer"></a>

```typescript
import { dataAwsccRedshiftQev2IdcApplication } from '@cdktn/provider-awscc'

new dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication(scope: Construct, id: string, config: DataAwsccRedshiftQev2IdcApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig">DataAwsccRedshiftQev2IdcApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig">DataAwsccRedshiftQev2IdcApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftQev2IdcApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isConstruct"></a>

```typescript
import { dataAwsccRedshiftQev2IdcApplication } from '@cdktn/provider-awscc'

dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformElement"></a>

```typescript
import { dataAwsccRedshiftQev2IdcApplication } from '@cdktn/provider-awscc'

dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformDataSource"></a>

```typescript
import { dataAwsccRedshiftQev2IdcApplication } from '@cdktn/provider-awscc'

dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generateConfigForImport"></a>

```typescript
import { dataAwsccRedshiftQev2IdcApplication } from '@cdktn/provider-awscc'

dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRedshiftQev2IdcApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRedshiftQev2IdcApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRedshiftQev2IdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/redshift_qev2_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftQev2IdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcDisplayName">idcDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcInstanceArn">idcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcManagedApplicationArn">idcManagedApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcOnboardStatus">idcOnboardStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.qev2IdcApplicationArn">qev2IdcApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.qev2IdcApplicationName">qev2IdcApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList">DataAwsccRedshiftQev2IdcApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `idcDisplayName`<sup>Required</sup> <a name="idcDisplayName" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcDisplayName"></a>

```typescript
public readonly idcDisplayName: string;
```

- *Type:* string

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcInstanceArn"></a>

```typescript
public readonly idcInstanceArn: string;
```

- *Type:* string

---

##### `idcManagedApplicationArn`<sup>Required</sup> <a name="idcManagedApplicationArn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcManagedApplicationArn"></a>

```typescript
public readonly idcManagedApplicationArn: string;
```

- *Type:* string

---

##### `idcOnboardStatus`<sup>Required</sup> <a name="idcOnboardStatus" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idcOnboardStatus"></a>

```typescript
public readonly idcOnboardStatus: string;
```

- *Type:* string

---

##### `qev2IdcApplicationArn`<sup>Required</sup> <a name="qev2IdcApplicationArn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.qev2IdcApplicationArn"></a>

```typescript
public readonly qev2IdcApplicationArn: string;
```

- *Type:* string

---

##### `qev2IdcApplicationName`<sup>Required</sup> <a name="qev2IdcApplicationName" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.qev2IdcApplicationName"></a>

```typescript
public readonly qev2IdcApplicationName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.tags"></a>

```typescript
public readonly tags: DataAwsccRedshiftQev2IdcApplicationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList">DataAwsccRedshiftQev2IdcApplicationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftQev2IdcApplicationConfig <a name="DataAwsccRedshiftQev2IdcApplicationConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.Initializer"></a>

```typescript
import { dataAwsccRedshiftQev2IdcApplication } from '@cdktn/provider-awscc'

const dataAwsccRedshiftQev2IdcApplicationConfig: dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/redshift_qev2_idc_application#id DataAwsccRedshiftQev2IdcApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRedshiftQev2IdcApplicationTags <a name="DataAwsccRedshiftQev2IdcApplicationTags" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTags.Initializer"></a>

```typescript
import { dataAwsccRedshiftQev2IdcApplication } from '@cdktn/provider-awscc'

const dataAwsccRedshiftQev2IdcApplicationTags: dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRedshiftQev2IdcApplicationTagsList <a name="DataAwsccRedshiftQev2IdcApplicationTagsList" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer"></a>

```typescript
import { dataAwsccRedshiftQev2IdcApplication } from '@cdktn/provider-awscc'

new dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRedshiftQev2IdcApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRedshiftQev2IdcApplicationTagsOutputReference <a name="DataAwsccRedshiftQev2IdcApplicationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRedshiftQev2IdcApplication } from '@cdktn/provider-awscc'

new dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTags">DataAwsccRedshiftQev2IdcApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRedshiftQev2IdcApplicationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftQev2IdcApplication.DataAwsccRedshiftQev2IdcApplicationTags">DataAwsccRedshiftQev2IdcApplicationTags</a>

---



