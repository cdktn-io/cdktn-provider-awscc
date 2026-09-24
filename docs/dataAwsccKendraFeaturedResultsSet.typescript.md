# `dataAwsccKendraFeaturedResultsSet` Submodule <a name="`dataAwsccKendraFeaturedResultsSet` Submodule" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKendraFeaturedResultsSet <a name="DataAwsccKendraFeaturedResultsSet" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kendra_featured_results_set awscc_kendra_featured_results_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer"></a>

```typescript
import { dataAwsccKendraFeaturedResultsSet } from '@cdktn/provider-awscc'

new dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet(scope: Construct, id: string, config: DataAwsccKendraFeaturedResultsSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig">DataAwsccKendraFeaturedResultsSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig">DataAwsccKendraFeaturedResultsSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isConstruct"></a>

```typescript
import { dataAwsccKendraFeaturedResultsSet } from '@cdktn/provider-awscc'

dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformElement"></a>

```typescript
import { dataAwsccKendraFeaturedResultsSet } from '@cdktn/provider-awscc'

dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformDataSource"></a>

```typescript
import { dataAwsccKendraFeaturedResultsSet } from '@cdktn/provider-awscc'

dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.generateConfigForImport"></a>

```typescript
import { dataAwsccKendraFeaturedResultsSet } from '@cdktn/provider-awscc'

dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccKendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccKendraFeaturedResultsSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccKendraFeaturedResultsSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kendra_featured_results_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKendraFeaturedResultsSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.featuredDocuments">featuredDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList">DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.featuredResultsSetId">featuredResultsSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.featuredResultsSetName">featuredResultsSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.queryTexts">queryTexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList">DataAwsccKendraFeaturedResultsSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `featuredDocuments`<sup>Required</sup> <a name="featuredDocuments" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.featuredDocuments"></a>

```typescript
public readonly featuredDocuments: DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList">DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList</a>

---

##### `featuredResultsSetId`<sup>Required</sup> <a name="featuredResultsSetId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.featuredResultsSetId"></a>

```typescript
public readonly featuredResultsSetId: string;
```

- *Type:* string

---

##### `featuredResultsSetName`<sup>Required</sup> <a name="featuredResultsSetName" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.featuredResultsSetName"></a>

```typescript
public readonly featuredResultsSetName: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `queryTexts`<sup>Required</sup> <a name="queryTexts" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.queryTexts"></a>

```typescript
public readonly queryTexts: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.tags"></a>

```typescript
public readonly tags: DataAwsccKendraFeaturedResultsSetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList">DataAwsccKendraFeaturedResultsSetTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKendraFeaturedResultsSetConfig <a name="DataAwsccKendraFeaturedResultsSetConfig" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.Initializer"></a>

```typescript
import { dataAwsccKendraFeaturedResultsSet } from '@cdktn/provider-awscc'

const dataAwsccKendraFeaturedResultsSetConfig: dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/kendra_featured_results_set#id DataAwsccKendraFeaturedResultsSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKendraFeaturedResultsSetFeaturedDocuments <a name="DataAwsccKendraFeaturedResultsSetFeaturedDocuments" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocuments.Initializer"></a>

```typescript
import { dataAwsccKendraFeaturedResultsSet } from '@cdktn/provider-awscc'

const dataAwsccKendraFeaturedResultsSetFeaturedDocuments: dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocuments = { ... }
```


### DataAwsccKendraFeaturedResultsSetTags <a name="DataAwsccKendraFeaturedResultsSetTags" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTags.Initializer"></a>

```typescript
import { dataAwsccKendraFeaturedResultsSet } from '@cdktn/provider-awscc'

const dataAwsccKendraFeaturedResultsSetTags: dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList <a name="DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer"></a>

```typescript
import { dataAwsccKendraFeaturedResultsSet } from '@cdktn/provider-awscc'

new dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.get"></a>

```typescript
public get(index: number): DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference <a name="DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraFeaturedResultsSet } from '@cdktn/provider-awscc'

new dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocuments">DataAwsccKendraFeaturedResultsSetFeaturedDocuments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraFeaturedResultsSetFeaturedDocuments;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetFeaturedDocuments">DataAwsccKendraFeaturedResultsSetFeaturedDocuments</a>

---


### DataAwsccKendraFeaturedResultsSetTagsList <a name="DataAwsccKendraFeaturedResultsSetTagsList" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer"></a>

```typescript
import { dataAwsccKendraFeaturedResultsSet } from '@cdktn/provider-awscc'

new dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.get"></a>

```typescript
public get(index: number): DataAwsccKendraFeaturedResultsSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKendraFeaturedResultsSetTagsOutputReference <a name="DataAwsccKendraFeaturedResultsSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraFeaturedResultsSet } from '@cdktn/provider-awscc'

new dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTags">DataAwsccKendraFeaturedResultsSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraFeaturedResultsSetTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraFeaturedResultsSet.DataAwsccKendraFeaturedResultsSetTags">DataAwsccKendraFeaturedResultsSetTags</a>

---



