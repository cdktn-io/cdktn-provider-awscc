# `dataAwsccTranscribeVocabulary` Submodule <a name="`dataAwsccTranscribeVocabulary` Submodule" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTranscribeVocabulary <a name="DataAwsccTranscribeVocabulary" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/transcribe_vocabulary awscc_transcribe_vocabulary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.Initializer"></a>

```typescript
import { dataAwsccTranscribeVocabulary } from '@cdktn/provider-awscc'

new dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary(scope: Construct, id: string, config: DataAwsccTranscribeVocabularyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig">DataAwsccTranscribeVocabularyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig">DataAwsccTranscribeVocabularyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTranscribeVocabulary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.isConstruct"></a>

```typescript
import { dataAwsccTranscribeVocabulary } from '@cdktn/provider-awscc'

dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.isTerraformElement"></a>

```typescript
import { dataAwsccTranscribeVocabulary } from '@cdktn/provider-awscc'

dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.isTerraformDataSource"></a>

```typescript
import { dataAwsccTranscribeVocabulary } from '@cdktn/provider-awscc'

dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.generateConfigForImport"></a>

```typescript
import { dataAwsccTranscribeVocabulary } from '@cdktn/provider-awscc'

dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccTranscribeVocabulary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccTranscribeVocabulary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccTranscribeVocabulary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/transcribe_vocabulary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTranscribeVocabulary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.phrases">phrases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList">DataAwsccTranscribeVocabularyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.vocabularyFileUri">vocabularyFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.vocabularyState">vocabularyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `phrases`<sup>Required</sup> <a name="phrases" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.phrases"></a>

```typescript
public readonly phrases: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.tags"></a>

```typescript
public readonly tags: DataAwsccTranscribeVocabularyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList">DataAwsccTranscribeVocabularyTagsList</a>

---

##### `vocabularyFileUri`<sup>Required</sup> <a name="vocabularyFileUri" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.vocabularyFileUri"></a>

```typescript
public readonly vocabularyFileUri: string;
```

- *Type:* string

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

---

##### `vocabularyState`<sup>Required</sup> <a name="vocabularyState" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.vocabularyState"></a>

```typescript
public readonly vocabularyState: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabulary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTranscribeVocabularyConfig <a name="DataAwsccTranscribeVocabularyConfig" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.Initializer"></a>

```typescript
import { dataAwsccTranscribeVocabulary } from '@cdktn/provider-awscc'

const dataAwsccTranscribeVocabularyConfig: dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/transcribe_vocabulary#id DataAwsccTranscribeVocabulary#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTranscribeVocabularyTags <a name="DataAwsccTranscribeVocabularyTags" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTags.Initializer"></a>

```typescript
import { dataAwsccTranscribeVocabulary } from '@cdktn/provider-awscc'

const dataAwsccTranscribeVocabularyTags: dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTranscribeVocabularyTagsList <a name="DataAwsccTranscribeVocabularyTagsList" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.Initializer"></a>

```typescript
import { dataAwsccTranscribeVocabulary } from '@cdktn/provider-awscc'

new dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.get"></a>

```typescript
public get(index: number): DataAwsccTranscribeVocabularyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccTranscribeVocabularyTagsOutputReference <a name="DataAwsccTranscribeVocabularyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccTranscribeVocabulary } from '@cdktn/provider-awscc'

new dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTags">DataAwsccTranscribeVocabularyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTranscribeVocabularyTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeVocabulary.DataAwsccTranscribeVocabularyTags">DataAwsccTranscribeVocabularyTags</a>

---



