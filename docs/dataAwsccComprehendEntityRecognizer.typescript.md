# `dataAwsccComprehendEntityRecognizer` Submodule <a name="`dataAwsccComprehendEntityRecognizer` Submodule" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComprehendEntityRecognizer <a name="DataAwsccComprehendEntityRecognizer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/comprehend_entity_recognizer awscc_comprehend_entity_recognizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

new dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer(scope: Construct, id: string, config: DataAwsccComprehendEntityRecognizerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig">DataAwsccComprehendEntityRecognizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig">DataAwsccComprehendEntityRecognizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isConstruct"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformElement"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformDataSource"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccComprehendEntityRecognizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccComprehendEntityRecognizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/comprehend_entity_recognizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComprehendEntityRecognizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.modelKmsKeyId">modelKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.modelPolicy">modelPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.recognizerName">recognizerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList">DataAwsccComprehendEntityRecognizerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference">DataAwsccComprehendEntityRecognizerVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.inputDataConfig"></a>

```typescript
public readonly inputDataConfig: DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference</a>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `modelKmsKeyId`<sup>Required</sup> <a name="modelKmsKeyId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.modelKmsKeyId"></a>

```typescript
public readonly modelKmsKeyId: string;
```

- *Type:* string

---

##### `modelPolicy`<sup>Required</sup> <a name="modelPolicy" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.modelPolicy"></a>

```typescript
public readonly modelPolicy: string;
```

- *Type:* string

---

##### `recognizerName`<sup>Required</sup> <a name="recognizerName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.recognizerName"></a>

```typescript
public readonly recognizerName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.tags"></a>

```typescript
public readonly tags: DataAwsccComprehendEntityRecognizerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList">DataAwsccComprehendEntityRecognizerTagsList</a>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: DataAwsccComprehendEntityRecognizerVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference">DataAwsccComprehendEntityRecognizerVpcConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComprehendEntityRecognizerConfig <a name="DataAwsccComprehendEntityRecognizerConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

const dataAwsccComprehendEntityRecognizerConfig: dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/comprehend_entity_recognizer#id DataAwsccComprehendEntityRecognizer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccComprehendEntityRecognizerInputDataConfig <a name="DataAwsccComprehendEntityRecognizerInputDataConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

const dataAwsccComprehendEntityRecognizerInputDataConfig: dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig = { ... }
```


### DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

const dataAwsccComprehendEntityRecognizerInputDataConfigAnnotations: dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations = { ... }
```


### DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

const dataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests: dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests = { ... }
```


### DataAwsccComprehendEntityRecognizerInputDataConfigDocuments <a name="DataAwsccComprehendEntityRecognizerInputDataConfigDocuments" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

const dataAwsccComprehendEntityRecognizerInputDataConfigDocuments: dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments = { ... }
```


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

const dataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct: dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct = { ... }
```


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

const dataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes: dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes = { ... }
```


### DataAwsccComprehendEntityRecognizerTags <a name="DataAwsccComprehendEntityRecognizerTags" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

const dataAwsccComprehendEntityRecognizerTags: dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags = { ... }
```


### DataAwsccComprehendEntityRecognizerVpcConfig <a name="DataAwsccComprehendEntityRecognizerVpcConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

const dataAwsccComprehendEntityRecognizerVpcConfig: dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

new dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri">testS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations">DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `testS3Uri`<sup>Required</sup> <a name="testS3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri"></a>

```typescript
public readonly testS3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations">DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

new dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get"></a>

```typescript
public get(index: number): DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

new dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri">annotationDataS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames">attributeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType">documentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri">sourceDocumentsS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split">split</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests">DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotationDataS3Uri`<sup>Required</sup> <a name="annotationDataS3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri"></a>

```typescript
public readonly annotationDataS3Uri: string;
```

- *Type:* string

---

##### `attributeNames`<sup>Required</sup> <a name="attributeNames" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames"></a>

```typescript
public readonly attributeNames: string[];
```

- *Type:* string[]

---

##### `documentType`<sup>Required</sup> <a name="documentType" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType"></a>

```typescript
public readonly documentType: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `sourceDocumentsS3Uri`<sup>Required</sup> <a name="sourceDocumentsS3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri"></a>

```typescript
public readonly sourceDocumentsS3Uri: string;
```

- *Type:* string

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split"></a>

```typescript
public readonly split: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests">DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

new dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat">inputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri">testS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments">DataAwsccComprehendEntityRecognizerInputDataConfigDocuments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `testS3Uri`<sup>Required</sup> <a name="testS3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri"></a>

```typescript
public readonly testS3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendEntityRecognizerInputDataConfigDocuments;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments">DataAwsccComprehendEntityRecognizerInputDataConfigDocuments</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

new dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct">DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct">DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

new dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.get"></a>

```typescript
public get(index: number): DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

new dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes">DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes">DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

new dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations">annotations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests">augmentedManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat">dataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.documents">documents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList">entityList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList">DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig">DataAwsccComprehendEntityRecognizerInputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations"></a>

```typescript
public readonly annotations: DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a>

---

##### `augmentedManifests`<sup>Required</sup> <a name="augmentedManifests" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests"></a>

```typescript
public readonly augmentedManifests: DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a>

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

---

##### `documents`<sup>Required</sup> <a name="documents" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.documents"></a>

```typescript
public readonly documents: DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a>

---

##### `entityList`<sup>Required</sup> <a name="entityList" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList"></a>

```typescript
public readonly entityList: DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference</a>

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes"></a>

```typescript
public readonly entityTypes: DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList">DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendEntityRecognizerInputDataConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig">DataAwsccComprehendEntityRecognizerInputDataConfig</a>

---


### DataAwsccComprehendEntityRecognizerTagsList <a name="DataAwsccComprehendEntityRecognizerTagsList" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

new dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.get"></a>

```typescript
public get(index: number): DataAwsccComprehendEntityRecognizerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComprehendEntityRecognizerTagsOutputReference <a name="DataAwsccComprehendEntityRecognizerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

new dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags">DataAwsccComprehendEntityRecognizerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendEntityRecognizerTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags">DataAwsccComprehendEntityRecognizerTags</a>

---


### DataAwsccComprehendEntityRecognizerVpcConfigOutputReference <a name="DataAwsccComprehendEntityRecognizerVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendEntityRecognizer } from '@cdktn/provider-awscc'

new dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig">DataAwsccComprehendEntityRecognizerVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendEntityRecognizerVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig">DataAwsccComprehendEntityRecognizerVpcConfig</a>

---



