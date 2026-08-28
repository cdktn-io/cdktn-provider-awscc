# `dataAwsccComprehendDocumentClassifier` Submodule <a name="`dataAwsccComprehendDocumentClassifier` Submodule" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComprehendDocumentClassifier <a name="DataAwsccComprehendDocumentClassifier" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/comprehend_document_classifier awscc_comprehend_document_classifier}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

new dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier(scope: Construct, id: string, config: DataAwsccComprehendDocumentClassifierConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig">DataAwsccComprehendDocumentClassifierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig">DataAwsccComprehendDocumentClassifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccComprehendDocumentClassifier resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.isConstruct"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.isTerraformElement"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.isTerraformDataSource"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.generateConfigForImport"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccComprehendDocumentClassifier resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccComprehendDocumentClassifier to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccComprehendDocumentClassifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/comprehend_document_classifier#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComprehendDocumentClassifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.documentClassifierName">documentClassifierName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference">DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.modelKmsKeyId">modelKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.modelPolicy">modelPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.outputDataConfig">outputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference">DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList">DataAwsccComprehendDocumentClassifierTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference">DataAwsccComprehendDocumentClassifierVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

---

##### `documentClassifierName`<sup>Required</sup> <a name="documentClassifierName" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.documentClassifierName"></a>

```typescript
public readonly documentClassifierName: string;
```

- *Type:* string

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.inputDataConfig"></a>

```typescript
public readonly inputDataConfig: DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference">DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference</a>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `modelKmsKeyId`<sup>Required</sup> <a name="modelKmsKeyId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.modelKmsKeyId"></a>

```typescript
public readonly modelKmsKeyId: string;
```

- *Type:* string

---

##### `modelPolicy`<sup>Required</sup> <a name="modelPolicy" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.modelPolicy"></a>

```typescript
public readonly modelPolicy: string;
```

- *Type:* string

---

##### `outputDataConfig`<sup>Required</sup> <a name="outputDataConfig" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.outputDataConfig"></a>

```typescript
public readonly outputDataConfig: DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference">DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.tags"></a>

```typescript
public readonly tags: DataAwsccComprehendDocumentClassifierTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList">DataAwsccComprehendDocumentClassifierTagsList</a>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: DataAwsccComprehendDocumentClassifierVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference">DataAwsccComprehendDocumentClassifierVpcConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifier.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComprehendDocumentClassifierConfig <a name="DataAwsccComprehendDocumentClassifierConfig" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

const dataAwsccComprehendDocumentClassifierConfig: dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/comprehend_document_classifier#id DataAwsccComprehendDocumentClassifier#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccComprehendDocumentClassifierInputDataConfig <a name="DataAwsccComprehendDocumentClassifierInputDataConfig" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

const dataAwsccComprehendDocumentClassifierInputDataConfig: dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfig = { ... }
```


### DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests <a name="DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

const dataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests: dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests = { ... }
```


### DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig <a name="DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

const dataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig: dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig = { ... }
```


### DataAwsccComprehendDocumentClassifierInputDataConfigDocuments <a name="DataAwsccComprehendDocumentClassifierInputDataConfigDocuments" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocuments.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

const dataAwsccComprehendDocumentClassifierInputDataConfigDocuments: dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocuments = { ... }
```


### DataAwsccComprehendDocumentClassifierOutputDataConfig <a name="DataAwsccComprehendDocumentClassifierOutputDataConfig" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

const dataAwsccComprehendDocumentClassifierOutputDataConfig: dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfig = { ... }
```


### DataAwsccComprehendDocumentClassifierTags <a name="DataAwsccComprehendDocumentClassifierTags" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTags.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

const dataAwsccComprehendDocumentClassifierTags: dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTags = { ... }
```


### DataAwsccComprehendDocumentClassifierVpcConfig <a name="DataAwsccComprehendDocumentClassifierVpcConfig" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

const dataAwsccComprehendDocumentClassifierVpcConfig: dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList <a name="DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

new dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get"></a>

```typescript
public get(index: number): DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference <a name="DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

new dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNames">attributeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.split">split</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests">DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeNames`<sup>Required</sup> <a name="attributeNames" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNames"></a>

```typescript
public readonly attributeNames: string[];
```

- *Type:* string[]

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.split"></a>

```typescript
public readonly split: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests">DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifests</a>

---


### DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference <a name="DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

new dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadAction">documentReadAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadMode">documentReadMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.featureTypes">featureTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig">DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `documentReadAction`<sup>Required</sup> <a name="documentReadAction" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadAction"></a>

```typescript
public readonly documentReadAction: string;
```

- *Type:* string

---

##### `documentReadMode`<sup>Required</sup> <a name="documentReadMode" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadMode"></a>

```typescript
public readonly documentReadMode: string;
```

- *Type:* string

---

##### `featureTypes`<sup>Required</sup> <a name="featureTypes" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.featureTypes"></a>

```typescript
public readonly featureTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig">DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfig</a>

---


### DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference <a name="DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

new dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.testS3Uri">testS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocuments">DataAwsccComprehendDocumentClassifierInputDataConfigDocuments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `testS3Uri`<sup>Required</sup> <a name="testS3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.testS3Uri"></a>

```typescript
public readonly testS3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendDocumentClassifierInputDataConfigDocuments;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocuments">DataAwsccComprehendDocumentClassifierInputDataConfigDocuments</a>

---


### DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference <a name="DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

new dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifests">augmentedManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList">DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormat">dataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.documentReaderConfig">documentReaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference">DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.documents">documents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference">DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.documentType">documentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiter">labelDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3Uri">testS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfig">DataAwsccComprehendDocumentClassifierInputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `augmentedManifests`<sup>Required</sup> <a name="augmentedManifests" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifests"></a>

```typescript
public readonly augmentedManifests: DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList">DataAwsccComprehendDocumentClassifierInputDataConfigAugmentedManifestsList</a>

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

---

##### `documentReaderConfig`<sup>Required</sup> <a name="documentReaderConfig" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.documentReaderConfig"></a>

```typescript
public readonly documentReaderConfig: DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference">DataAwsccComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference</a>

---

##### `documents`<sup>Required</sup> <a name="documents" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.documents"></a>

```typescript
public readonly documents: DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference">DataAwsccComprehendDocumentClassifierInputDataConfigDocumentsOutputReference</a>

---

##### `documentType`<sup>Required</sup> <a name="documentType" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.documentType"></a>

```typescript
public readonly documentType: string;
```

- *Type:* string

---

##### `labelDelimiter`<sup>Required</sup> <a name="labelDelimiter" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiter"></a>

```typescript
public readonly labelDelimiter: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `testS3Uri`<sup>Required</sup> <a name="testS3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3Uri"></a>

```typescript
public readonly testS3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendDocumentClassifierInputDataConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierInputDataConfig">DataAwsccComprehendDocumentClassifierInputDataConfig</a>

---


### DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference <a name="DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

new dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfig">DataAwsccComprehendDocumentClassifierOutputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendDocumentClassifierOutputDataConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierOutputDataConfig">DataAwsccComprehendDocumentClassifierOutputDataConfig</a>

---


### DataAwsccComprehendDocumentClassifierTagsList <a name="DataAwsccComprehendDocumentClassifierTagsList" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

new dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.get"></a>

```typescript
public get(index: number): DataAwsccComprehendDocumentClassifierTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComprehendDocumentClassifierTagsOutputReference <a name="DataAwsccComprehendDocumentClassifierTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

new dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTags">DataAwsccComprehendDocumentClassifierTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendDocumentClassifierTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierTags">DataAwsccComprehendDocumentClassifierTags</a>

---


### DataAwsccComprehendDocumentClassifierVpcConfigOutputReference <a name="DataAwsccComprehendDocumentClassifierVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifier } from '@cdktn/provider-awscc'

new dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfig">DataAwsccComprehendDocumentClassifierVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendDocumentClassifierVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifier.DataAwsccComprehendDocumentClassifierVpcConfig">DataAwsccComprehendDocumentClassifierVpcConfig</a>

---



