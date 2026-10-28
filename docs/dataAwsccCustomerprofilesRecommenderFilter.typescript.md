# `dataAwsccCustomerprofilesRecommenderFilter` Submodule <a name="`dataAwsccCustomerprofilesRecommenderFilter` Submodule" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCustomerprofilesRecommenderFilter <a name="DataAwsccCustomerprofilesRecommenderFilter" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/customerprofiles_recommender_filter awscc_customerprofiles_recommender_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesRecommenderFilter } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter(scope: Construct, id: string, config: DataAwsccCustomerprofilesRecommenderFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig">DataAwsccCustomerprofilesRecommenderFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig">DataAwsccCustomerprofilesRecommenderFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCustomerprofilesRecommenderFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isConstruct"></a>

```typescript
import { dataAwsccCustomerprofilesRecommenderFilter } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformElement"></a>

```typescript
import { dataAwsccCustomerprofilesRecommenderFilter } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformDataSource"></a>

```typescript
import { dataAwsccCustomerprofilesRecommenderFilter } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.generateConfigForImport"></a>

```typescript
import { dataAwsccCustomerprofilesRecommenderFilter } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCustomerprofilesRecommenderFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCustomerprofilesRecommenderFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCustomerprofilesRecommenderFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/customerprofiles_recommender_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCustomerprofilesRecommenderFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderFilterArn">recommenderFilterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderFilterExpression">recommenderFilterExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderFilterName">recommenderFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderSchemaName">recommenderSchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList">DataAwsccCustomerprofilesRecommenderFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `recommenderFilterArn`<sup>Required</sup> <a name="recommenderFilterArn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderFilterArn"></a>

```typescript
public readonly recommenderFilterArn: string;
```

- *Type:* string

---

##### `recommenderFilterExpression`<sup>Required</sup> <a name="recommenderFilterExpression" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderFilterExpression"></a>

```typescript
public readonly recommenderFilterExpression: string;
```

- *Type:* string

---

##### `recommenderFilterName`<sup>Required</sup> <a name="recommenderFilterName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderFilterName"></a>

```typescript
public readonly recommenderFilterName: string;
```

- *Type:* string

---

##### `recommenderSchemaName`<sup>Required</sup> <a name="recommenderSchemaName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.recommenderSchemaName"></a>

```typescript
public readonly recommenderSchemaName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.tags"></a>

```typescript
public readonly tags: DataAwsccCustomerprofilesRecommenderFilterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList">DataAwsccCustomerprofilesRecommenderFilterTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCustomerprofilesRecommenderFilterConfig <a name="DataAwsccCustomerprofilesRecommenderFilterConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesRecommenderFilter } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesRecommenderFilterConfig: dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/customerprofiles_recommender_filter#id DataAwsccCustomerprofilesRecommenderFilter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCustomerprofilesRecommenderFilterTags <a name="DataAwsccCustomerprofilesRecommenderFilterTags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTags.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesRecommenderFilter } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesRecommenderFilterTags: dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCustomerprofilesRecommenderFilterTagsList <a name="DataAwsccCustomerprofilesRecommenderFilterTagsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesRecommenderFilter } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference <a name="DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesRecommenderFilter } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTags">DataAwsccCustomerprofilesRecommenderFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCustomerprofilesRecommenderFilterTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommenderFilter.DataAwsccCustomerprofilesRecommenderFilterTags">DataAwsccCustomerprofilesRecommenderFilterTags</a>

---



