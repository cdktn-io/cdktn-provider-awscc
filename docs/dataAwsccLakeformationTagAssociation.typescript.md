# `dataAwsccLakeformationTagAssociation` Submodule <a name="`dataAwsccLakeformationTagAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLakeformationTagAssociation <a name="DataAwsccLakeformationTagAssociation" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lakeformation_tag_association awscc_lakeformation_tag_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

new dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation(scope: Construct, id: string, config: DataAwsccLakeformationTagAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig">DataAwsccLakeformationTagAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig">DataAwsccLakeformationTagAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLakeformationTagAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isConstruct"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLakeformationTagAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLakeformationTagAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLakeformationTagAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lakeformation_tag_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLakeformationTagAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.lfTags">lfTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList">DataAwsccLakeformationTagAssociationLfTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference">DataAwsccLakeformationTagAssociationResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.tagsIdentifier">tagsIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `lfTags`<sup>Required</sup> <a name="lfTags" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.lfTags"></a>

```typescript
public readonly lfTags: DataAwsccLakeformationTagAssociationLfTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList">DataAwsccLakeformationTagAssociationLfTagsList</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.resource"></a>

```typescript
public readonly resource: DataAwsccLakeformationTagAssociationResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference">DataAwsccLakeformationTagAssociationResourceOutputReference</a>

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

---

##### `tagsIdentifier`<sup>Required</sup> <a name="tagsIdentifier" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.tagsIdentifier"></a>

```typescript
public readonly tagsIdentifier: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLakeformationTagAssociationConfig <a name="DataAwsccLakeformationTagAssociationConfig" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

const dataAwsccLakeformationTagAssociationConfig: dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lakeformation_tag_association#id DataAwsccLakeformationTagAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLakeformationTagAssociationLfTags <a name="DataAwsccLakeformationTagAssociationLfTags" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTags.Initializer"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

const dataAwsccLakeformationTagAssociationLfTags: dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTags = { ... }
```


### DataAwsccLakeformationTagAssociationResource <a name="DataAwsccLakeformationTagAssociationResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResource.Initializer"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

const dataAwsccLakeformationTagAssociationResource: dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResource = { ... }
```


### DataAwsccLakeformationTagAssociationResourceDatabase <a name="DataAwsccLakeformationTagAssociationResourceDatabase" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabase.Initializer"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

const dataAwsccLakeformationTagAssociationResourceDatabase: dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabase = { ... }
```


### DataAwsccLakeformationTagAssociationResourceTable <a name="DataAwsccLakeformationTagAssociationResourceTable" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTable.Initializer"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

const dataAwsccLakeformationTagAssociationResourceTable: dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTable = { ... }
```


### DataAwsccLakeformationTagAssociationResourceTableWithColumns <a name="DataAwsccLakeformationTagAssociationResourceTableWithColumns" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumns.Initializer"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

const dataAwsccLakeformationTagAssociationResourceTableWithColumns: dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumns = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLakeformationTagAssociationLfTagsList <a name="DataAwsccLakeformationTagAssociationLfTagsList" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

new dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.get"></a>

```typescript
public get(index: number): DataAwsccLakeformationTagAssociationLfTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLakeformationTagAssociationLfTagsOutputReference <a name="DataAwsccLakeformationTagAssociationLfTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

new dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.tagValues">tagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTags">DataAwsccLakeformationTagAssociationLfTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationTagAssociationLfTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTags">DataAwsccLakeformationTagAssociationLfTags</a>

---


### DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference <a name="DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

new dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabase">DataAwsccLakeformationTagAssociationResourceDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationTagAssociationResourceDatabase;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabase">DataAwsccLakeformationTagAssociationResourceDatabase</a>

---


### DataAwsccLakeformationTagAssociationResourceOutputReference <a name="DataAwsccLakeformationTagAssociationResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

new dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference">DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.table">table</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference">DataAwsccLakeformationTagAssociationResourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference">DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResource">DataAwsccLakeformationTagAssociationResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.database"></a>

```typescript
public readonly database: DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference">DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.table"></a>

```typescript
public readonly table: DataAwsccLakeformationTagAssociationResourceTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference">DataAwsccLakeformationTagAssociationResourceTableOutputReference</a>

---

##### `tableWithColumns`<sup>Required</sup> <a name="tableWithColumns" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference">DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationTagAssociationResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResource">DataAwsccLakeformationTagAssociationResource</a>

---


### DataAwsccLakeformationTagAssociationResourceTableOutputReference <a name="DataAwsccLakeformationTagAssociationResourceTableOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

new dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.tableWildcard">tableWildcard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTable">DataAwsccLakeformationTagAssociationResourceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tableWildcard`<sup>Required</sup> <a name="tableWildcard" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.tableWildcard"></a>

```typescript
public readonly tableWildcard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationTagAssociationResourceTable;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTable">DataAwsccLakeformationTagAssociationResourceTable</a>

---


### DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference <a name="DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLakeformationTagAssociation } from '@cdktn/provider-awscc'

new dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumns">DataAwsccLakeformationTagAssociationResourceTableWithColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLakeformationTagAssociationResourceTableWithColumns;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumns">DataAwsccLakeformationTagAssociationResourceTableWithColumns</a>

---



