# `dataAwsccB2BiTransformer` Submodule <a name="`dataAwsccB2BiTransformer` Submodule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccB2BiTransformer <a name="DataAwsccB2BiTransformer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/b2bi_transformer awscc_b2bi_transformer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformer(scope: Construct, id: string, config: DataAwsccB2BiTransformerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig">DataAwsccB2BiTransformerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig">DataAwsccB2BiTransformerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccB2BiTransformer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isConstruct"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformElement"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformDataSource"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generateConfigForImport"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccB2BiTransformer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccB2BiTransformer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccB2BiTransformer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/b2bi_transformer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccB2BiTransformer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.ediType">ediType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference">DataAwsccB2BiTransformerEdiTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.fileFormat">fileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.inputConversion">inputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference">DataAwsccB2BiTransformerInputConversionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.mapping">mapping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference">DataAwsccB2BiTransformerMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.mappingTemplate">mappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.outputConversion">outputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference">DataAwsccB2BiTransformerOutputConversionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.sampleDocument">sampleDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.sampleDocuments">sampleDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference">DataAwsccB2BiTransformerSampleDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList">DataAwsccB2BiTransformerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.transformerArn">transformerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.transformerId">transformerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `ediType`<sup>Required</sup> <a name="ediType" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.ediType"></a>

```typescript
public readonly ediType: DataAwsccB2BiTransformerEdiTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference">DataAwsccB2BiTransformerEdiTypeOutputReference</a>

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.fileFormat"></a>

```typescript
public readonly fileFormat: string;
```

- *Type:* string

---

##### `inputConversion`<sup>Required</sup> <a name="inputConversion" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.inputConversion"></a>

```typescript
public readonly inputConversion: DataAwsccB2BiTransformerInputConversionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference">DataAwsccB2BiTransformerInputConversionOutputReference</a>

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.mapping"></a>

```typescript
public readonly mapping: DataAwsccB2BiTransformerMappingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference">DataAwsccB2BiTransformerMappingOutputReference</a>

---

##### `mappingTemplate`<sup>Required</sup> <a name="mappingTemplate" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.mappingTemplate"></a>

```typescript
public readonly mappingTemplate: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputConversion`<sup>Required</sup> <a name="outputConversion" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.outputConversion"></a>

```typescript
public readonly outputConversion: DataAwsccB2BiTransformerOutputConversionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference">DataAwsccB2BiTransformerOutputConversionOutputReference</a>

---

##### `sampleDocument`<sup>Required</sup> <a name="sampleDocument" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.sampleDocument"></a>

```typescript
public readonly sampleDocument: string;
```

- *Type:* string

---

##### `sampleDocuments`<sup>Required</sup> <a name="sampleDocuments" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.sampleDocuments"></a>

```typescript
public readonly sampleDocuments: DataAwsccB2BiTransformerSampleDocumentsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference">DataAwsccB2BiTransformerSampleDocumentsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.tags"></a>

```typescript
public readonly tags: DataAwsccB2BiTransformerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList">DataAwsccB2BiTransformerTagsList</a>

---

##### `transformerArn`<sup>Required</sup> <a name="transformerArn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.transformerArn"></a>

```typescript
public readonly transformerArn: string;
```

- *Type:* string

---

##### `transformerId`<sup>Required</sup> <a name="transformerId" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.transformerId"></a>

```typescript
public readonly transformerId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccB2BiTransformerConfig <a name="DataAwsccB2BiTransformerConfig" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerConfig: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/b2bi_transformer#id DataAwsccB2BiTransformer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccB2BiTransformerEdiType <a name="DataAwsccB2BiTransformerEdiType" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiType.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerEdiType: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiType = { ... }
```


### DataAwsccB2BiTransformerEdiTypeX12Details <a name="DataAwsccB2BiTransformerEdiTypeX12Details" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12Details"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12Details.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerEdiTypeX12Details: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12Details = { ... }
```


### DataAwsccB2BiTransformerInputConversion <a name="DataAwsccB2BiTransformerInputConversion" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversion.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerInputConversion: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversion = { ... }
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptions <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptions.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerInputConversionAdvancedOptions: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptions = { ... }
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12 <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12 = { ... }
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions = { ... }
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions = { ... }
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules = { ... }
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule = { ... }
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule = { ... }
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule = { ... }
```


### DataAwsccB2BiTransformerInputConversionFormatOptions <a name="DataAwsccB2BiTransformerInputConversionFormatOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptions.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerInputConversionFormatOptions: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptions = { ... }
```


### DataAwsccB2BiTransformerInputConversionFormatOptionsX12 <a name="DataAwsccB2BiTransformerInputConversionFormatOptionsX12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerInputConversionFormatOptionsX12: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12 = { ... }
```


### DataAwsccB2BiTransformerMapping <a name="DataAwsccB2BiTransformerMapping" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMapping.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerMapping: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMapping = { ... }
```


### DataAwsccB2BiTransformerOutputConversion <a name="DataAwsccB2BiTransformerOutputConversion" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversion.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerOutputConversion: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversion = { ... }
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptions <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptions.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerOutputConversionAdvancedOptions: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptions = { ... }
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12 <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12 = { ... }
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions = { ... }
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions = { ... }
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules = { ... }
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule = { ... }
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule = { ... }
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule = { ... }
```


### DataAwsccB2BiTransformerOutputConversionFormatOptions <a name="DataAwsccB2BiTransformerOutputConversionFormatOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptions.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerOutputConversionFormatOptions: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptions = { ... }
```


### DataAwsccB2BiTransformerOutputConversionFormatOptionsX12 <a name="DataAwsccB2BiTransformerOutputConversionFormatOptionsX12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerOutputConversionFormatOptionsX12: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12 = { ... }
```


### DataAwsccB2BiTransformerSampleDocuments <a name="DataAwsccB2BiTransformerSampleDocuments" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocuments.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerSampleDocuments: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocuments = { ... }
```


### DataAwsccB2BiTransformerSampleDocumentsKeys <a name="DataAwsccB2BiTransformerSampleDocumentsKeys" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeys.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerSampleDocumentsKeys: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeys = { ... }
```


### DataAwsccB2BiTransformerTags <a name="DataAwsccB2BiTransformerTags" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTags.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

const dataAwsccB2BiTransformerTags: dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccB2BiTransformerEdiTypeOutputReference <a name="DataAwsccB2BiTransformerEdiTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.x12Details">x12Details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference">DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiType">DataAwsccB2BiTransformerEdiType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x12Details`<sup>Required</sup> <a name="x12Details" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.x12Details"></a>

```typescript
public readonly x12Details: DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference">DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerEdiType;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiType">DataAwsccB2BiTransformerEdiType</a>

---


### DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference <a name="DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSet">transactionSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12Details">DataAwsccB2BiTransformerEdiTypeX12Details</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transactionSet`<sup>Required</sup> <a name="transactionSet" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSet"></a>

```typescript
public readonly transactionSet: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerEdiTypeX12Details;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12Details">DataAwsccB2BiTransformerEdiTypeX12Details</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptions">DataAwsccB2BiTransformerInputConversionAdvancedOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12"></a>

```typescript
public readonly x12: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerInputConversionAdvancedOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptions">DataAwsccB2BiTransformerInputConversionAdvancedOptions</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptions">splitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptions">validationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `splitOptions`<sup>Required</sup> <a name="splitOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptions"></a>

```typescript
public readonly splitOptions: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference</a>

---

##### `validationOptions`<sup>Required</sup> <a name="validationOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptions"></a>

```typescript
public readonly validationOptions: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy">splitBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `splitBy`<sup>Required</sup> <a name="splitBy" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy"></a>

```typescript
public readonly splitBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules">validationRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `validationRules`<sup>Required</sup> <a name="validationRules" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules"></a>

```typescript
public readonly validationRules: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd">codesToAdd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove">codesToRemove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codesToAdd`<sup>Required</sup> <a name="codesToAdd" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd"></a>

```typescript
public readonly codesToAdd: string[];
```

- *Type:* string[]

---

##### `codesToRemove`<sup>Required</sup> <a name="codesToRemove" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove"></a>

```typescript
public readonly codesToRemove: string[];
```

- *Type:* string[]

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition">elementPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement">requirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementPosition`<sup>Required</sup> <a name="elementPosition" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition"></a>

```typescript
public readonly elementPosition: string;
```

- *Type:* string

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement"></a>

```typescript
public readonly requirement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get"></a>

```typescript
public get(index: number): DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule">codeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule">elementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule">elementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeListValidationRule`<sup>Required</sup> <a name="codeListValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule"></a>

```typescript
public readonly codeListValidationRule: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a>

---

##### `elementLengthValidationRule`<sup>Required</sup> <a name="elementLengthValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule"></a>

```typescript
public readonly elementLengthValidationRule: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a>

---

##### `elementRequirementValidationRule`<sup>Required</sup> <a name="elementRequirementValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule"></a>

```typescript
public readonly elementRequirementValidationRule: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>

---


### DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference <a name="DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference">DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptions">DataAwsccB2BiTransformerInputConversionFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.x12"></a>

```typescript
public readonly x12: DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference">DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerInputConversionFormatOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptions">DataAwsccB2BiTransformerInputConversionFormatOptions</a>

---


### DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference <a name="DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSet">transactionSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12">DataAwsccB2BiTransformerInputConversionFormatOptionsX12</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transactionSet`<sup>Required</sup> <a name="transactionSet" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSet"></a>

```typescript
public readonly transactionSet: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerInputConversionFormatOptionsX12;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12">DataAwsccB2BiTransformerInputConversionFormatOptionsX12</a>

---


### DataAwsccB2BiTransformerInputConversionOutputReference <a name="DataAwsccB2BiTransformerInputConversionOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.advancedOptions">advancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference">DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.fromFormat">fromFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversion">DataAwsccB2BiTransformerInputConversion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedOptions`<sup>Required</sup> <a name="advancedOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.advancedOptions"></a>

```typescript
public readonly advancedOptions: DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference</a>

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.formatOptions"></a>

```typescript
public readonly formatOptions: DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference">DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference</a>

---

##### `fromFormat`<sup>Required</sup> <a name="fromFormat" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.fromFormat"></a>

```typescript
public readonly fromFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerInputConversion;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversion">DataAwsccB2BiTransformerInputConversion</a>

---


### DataAwsccB2BiTransformerMappingOutputReference <a name="DataAwsccB2BiTransformerMappingOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.templateLanguage">templateLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMapping">DataAwsccB2BiTransformerMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `templateLanguage`<sup>Required</sup> <a name="templateLanguage" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.templateLanguage"></a>

```typescript
public readonly templateLanguage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerMapping;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMapping">DataAwsccB2BiTransformerMapping</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptions">DataAwsccB2BiTransformerOutputConversionAdvancedOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12"></a>

```typescript
public readonly x12: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerOutputConversionAdvancedOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptions">DataAwsccB2BiTransformerOutputConversionAdvancedOptions</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptions">splitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptions">validationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `splitOptions`<sup>Required</sup> <a name="splitOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptions"></a>

```typescript
public readonly splitOptions: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference</a>

---

##### `validationOptions`<sup>Required</sup> <a name="validationOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptions"></a>

```typescript
public readonly validationOptions: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy">splitBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `splitBy`<sup>Required</sup> <a name="splitBy" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy"></a>

```typescript
public readonly splitBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules">validationRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `validationRules`<sup>Required</sup> <a name="validationRules" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules"></a>

```typescript
public readonly validationRules: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd">codesToAdd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove">codesToRemove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codesToAdd`<sup>Required</sup> <a name="codesToAdd" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd"></a>

```typescript
public readonly codesToAdd: string[];
```

- *Type:* string[]

---

##### `codesToRemove`<sup>Required</sup> <a name="codesToRemove" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove"></a>

```typescript
public readonly codesToRemove: string[];
```

- *Type:* string[]

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition">elementPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement">requirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementPosition`<sup>Required</sup> <a name="elementPosition" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition"></a>

```typescript
public readonly elementPosition: string;
```

- *Type:* string

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement"></a>

```typescript
public readonly requirement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get"></a>

```typescript
public get(index: number): DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule">codeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule">elementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule">elementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeListValidationRule`<sup>Required</sup> <a name="codeListValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule"></a>

```typescript
public readonly codeListValidationRule: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a>

---

##### `elementLengthValidationRule`<sup>Required</sup> <a name="elementLengthValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule"></a>

```typescript
public readonly elementLengthValidationRule: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a>

---

##### `elementRequirementValidationRule`<sup>Required</sup> <a name="elementRequirementValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule"></a>

```typescript
public readonly elementRequirementValidationRule: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>

---


### DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference <a name="DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference">DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptions">DataAwsccB2BiTransformerOutputConversionFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12"></a>

```typescript
public readonly x12: DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference">DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerOutputConversionFormatOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptions">DataAwsccB2BiTransformerOutputConversionFormatOptions</a>

---


### DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference <a name="DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSet">transactionSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12">DataAwsccB2BiTransformerOutputConversionFormatOptionsX12</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transactionSet`<sup>Required</sup> <a name="transactionSet" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSet"></a>

```typescript
public readonly transactionSet: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerOutputConversionFormatOptionsX12;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12">DataAwsccB2BiTransformerOutputConversionFormatOptionsX12</a>

---


### DataAwsccB2BiTransformerOutputConversionOutputReference <a name="DataAwsccB2BiTransformerOutputConversionOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.advancedOptions">advancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.toFormat">toFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversion">DataAwsccB2BiTransformerOutputConversion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedOptions`<sup>Required</sup> <a name="advancedOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.advancedOptions"></a>

```typescript
public readonly advancedOptions: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference</a>

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.formatOptions"></a>

```typescript
public readonly formatOptions: DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference</a>

---

##### `toFormat`<sup>Required</sup> <a name="toFormat" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.toFormat"></a>

```typescript
public readonly toFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerOutputConversion;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversion">DataAwsccB2BiTransformerOutputConversion</a>

---


### DataAwsccB2BiTransformerSampleDocumentsKeysList <a name="DataAwsccB2BiTransformerSampleDocumentsKeysList" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.get"></a>

```typescript
public get(index: number): DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference <a name="DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.output">output</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeys">DataAwsccB2BiTransformerSampleDocumentsKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerSampleDocumentsKeys;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeys">DataAwsccB2BiTransformerSampleDocumentsKeys</a>

---


### DataAwsccB2BiTransformerSampleDocumentsOutputReference <a name="DataAwsccB2BiTransformerSampleDocumentsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.keys">keys</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList">DataAwsccB2BiTransformerSampleDocumentsKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocuments">DataAwsccB2BiTransformerSampleDocuments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.keys"></a>

```typescript
public readonly keys: DataAwsccB2BiTransformerSampleDocumentsKeysList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList">DataAwsccB2BiTransformerSampleDocumentsKeysList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerSampleDocuments;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocuments">DataAwsccB2BiTransformerSampleDocuments</a>

---


### DataAwsccB2BiTransformerTagsList <a name="DataAwsccB2BiTransformerTagsList" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.get"></a>

```typescript
public get(index: number): DataAwsccB2BiTransformerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccB2BiTransformerTagsOutputReference <a name="DataAwsccB2BiTransformerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccB2BiTransformer } from '@cdktn/provider-awscc'

new dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTags">DataAwsccB2BiTransformerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccB2BiTransformerTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTags">DataAwsccB2BiTransformerTags</a>

---



