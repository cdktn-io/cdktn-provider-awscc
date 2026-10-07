# `dataAwsccTranscribeMedicalVocabulary` Submodule <a name="`dataAwsccTranscribeMedicalVocabulary` Submodule" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTranscribeMedicalVocabulary <a name="DataAwsccTranscribeMedicalVocabulary" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/transcribe_medical_vocabulary awscc_transcribe_medical_vocabulary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.Initializer"></a>

```typescript
import { dataAwsccTranscribeMedicalVocabulary } from '@cdktn/provider-awscc'

new dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary(scope: Construct, id: string, config: DataAwsccTranscribeMedicalVocabularyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig">DataAwsccTranscribeMedicalVocabularyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig">DataAwsccTranscribeMedicalVocabularyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTranscribeMedicalVocabulary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.isConstruct"></a>

```typescript
import { dataAwsccTranscribeMedicalVocabulary } from '@cdktn/provider-awscc'

dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.isTerraformElement"></a>

```typescript
import { dataAwsccTranscribeMedicalVocabulary } from '@cdktn/provider-awscc'

dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.isTerraformDataSource"></a>

```typescript
import { dataAwsccTranscribeMedicalVocabulary } from '@cdktn/provider-awscc'

dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.generateConfigForImport"></a>

```typescript
import { dataAwsccTranscribeMedicalVocabulary } from '@cdktn/provider-awscc'

dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccTranscribeMedicalVocabulary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccTranscribeMedicalVocabulary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccTranscribeMedicalVocabulary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/transcribe_medical_vocabulary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTranscribeMedicalVocabulary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList">DataAwsccTranscribeMedicalVocabularyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.vocabularyFileUri">vocabularyFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.tags"></a>

```typescript
public readonly tags: DataAwsccTranscribeMedicalVocabularyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList">DataAwsccTranscribeMedicalVocabularyTagsList</a>

---

##### `vocabularyFileUri`<sup>Required</sup> <a name="vocabularyFileUri" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.vocabularyFileUri"></a>

```typescript
public readonly vocabularyFileUri: string;
```

- *Type:* string

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabulary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTranscribeMedicalVocabularyConfig <a name="DataAwsccTranscribeMedicalVocabularyConfig" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.Initializer"></a>

```typescript
import { dataAwsccTranscribeMedicalVocabulary } from '@cdktn/provider-awscc'

const dataAwsccTranscribeMedicalVocabularyConfig: dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/transcribe_medical_vocabulary#id DataAwsccTranscribeMedicalVocabulary#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTranscribeMedicalVocabularyTags <a name="DataAwsccTranscribeMedicalVocabularyTags" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTags.Initializer"></a>

```typescript
import { dataAwsccTranscribeMedicalVocabulary } from '@cdktn/provider-awscc'

const dataAwsccTranscribeMedicalVocabularyTags: dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTranscribeMedicalVocabularyTagsList <a name="DataAwsccTranscribeMedicalVocabularyTagsList" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.Initializer"></a>

```typescript
import { dataAwsccTranscribeMedicalVocabulary } from '@cdktn/provider-awscc'

new dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.get"></a>

```typescript
public get(index: number): DataAwsccTranscribeMedicalVocabularyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccTranscribeMedicalVocabularyTagsOutputReference <a name="DataAwsccTranscribeMedicalVocabularyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccTranscribeMedicalVocabulary } from '@cdktn/provider-awscc'

new dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTags">DataAwsccTranscribeMedicalVocabularyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTranscribeMedicalVocabularyTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeMedicalVocabulary.DataAwsccTranscribeMedicalVocabularyTags">DataAwsccTranscribeMedicalVocabularyTags</a>

---



