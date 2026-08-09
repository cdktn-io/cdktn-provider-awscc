# `dataAwsccQuicksightTopic` Submodule <a name="`dataAwsccQuicksightTopic` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightTopic <a name="DataAwsccQuicksightTopic" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_topic awscc_quicksight_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopic(scope: Construct, id: string, config: DataAwsccQuicksightTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig">DataAwsccQuicksightTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig">DataAwsccQuicksightTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightTopic resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isConstruct"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformElement"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformDataSource"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.generateConfigForImport"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccQuicksightTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQuicksightTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQuicksightTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.configOptions">configOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference">DataAwsccQuicksightTopicConfigOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.customInstructions">customInstructions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference">DataAwsccQuicksightTopicCustomInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.dataSets">dataSets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList">DataAwsccQuicksightTopicDataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.folderArns">folderArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList">DataAwsccQuicksightTopicTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.topicId">topicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.userExperienceVersion">userExperienceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `configOptions`<sup>Required</sup> <a name="configOptions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.configOptions"></a>

```typescript
public readonly configOptions: DataAwsccQuicksightTopicConfigOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference">DataAwsccQuicksightTopicConfigOptionsOutputReference</a>

---

##### `customInstructions`<sup>Required</sup> <a name="customInstructions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.customInstructions"></a>

```typescript
public readonly customInstructions: DataAwsccQuicksightTopicCustomInstructionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference">DataAwsccQuicksightTopicCustomInstructionsOutputReference</a>

---

##### `dataSets`<sup>Required</sup> <a name="dataSets" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.dataSets"></a>

```typescript
public readonly dataSets: DataAwsccQuicksightTopicDataSetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList">DataAwsccQuicksightTopicDataSetsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `folderArns`<sup>Required</sup> <a name="folderArns" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.folderArns"></a>

```typescript
public readonly folderArns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.tags"></a>

```typescript
public readonly tags: DataAwsccQuicksightTopicTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList">DataAwsccQuicksightTopicTagsList</a>

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

---

##### `userExperienceVersion`<sup>Required</sup> <a name="userExperienceVersion" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.userExperienceVersion"></a>

```typescript
public readonly userExperienceVersion: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightTopicConfig <a name="DataAwsccQuicksightTopicConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicConfig: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_topic#id DataAwsccQuicksightTopic#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightTopicConfigOptions <a name="DataAwsccQuicksightTopicConfigOptions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptions.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicConfigOptions: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptions = { ... }
```


### DataAwsccQuicksightTopicCustomInstructions <a name="DataAwsccQuicksightTopicCustomInstructions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructions.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicCustomInstructions: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructions = { ... }
```


### DataAwsccQuicksightTopicDataSets <a name="DataAwsccQuicksightTopicDataSets" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSets.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSets: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSets = { ... }
```


### DataAwsccQuicksightTopicDataSetsCalculatedFields <a name="DataAwsccQuicksightTopicDataSetsCalculatedFields" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFields.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsCalculatedFields: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFields = { ... }
```


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms = { ... }
```


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder = { ... }
```


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting = { ... }
```


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions = { ... }
```


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat = { ... }
```


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType = { ... }
```


### DataAwsccQuicksightTopicDataSetsColumns <a name="DataAwsccQuicksightTopicDataSetsColumns" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumns.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsColumns: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumns = { ... }
```


### DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms <a name="DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms = { ... }
```


### DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder <a name="DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsColumnsComparativeOrder: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder = { ... }
```


### DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting <a name="DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting = { ... }
```


### DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions <a name="DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions = { ... }
```


### DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat <a name="DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat = { ... }
```


### DataAwsccQuicksightTopicDataSetsColumnsSemanticType <a name="DataAwsccQuicksightTopicDataSetsColumnsSemanticType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticType.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsColumnsSemanticType: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticType = { ... }
```


### DataAwsccQuicksightTopicDataSetsDataAggregation <a name="DataAwsccQuicksightTopicDataSetsDataAggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregation.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsDataAggregation: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregation = { ... }
```


### DataAwsccQuicksightTopicDataSetsFilters <a name="DataAwsccQuicksightTopicDataSetsFilters" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFilters.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFilters: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFilters = { ... }
```


### DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter <a name="DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFiltersCategoryFilter: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter = { ... }
```


### DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant = { ... }
```


### DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant = { ... }
```


### DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter <a name="DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter = { ... }
```


### DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant = { ... }
```


### DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant = { ... }
```


### DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter = { ... }
```


### DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant = { ... }
```


### DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter = { ... }
```


### DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant = { ... }
```


### DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant = { ... }
```


### DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter <a name="DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter = { ... }
```


### DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant = { ... }
```


### DataAwsccQuicksightTopicDataSetsNamedEntities <a name="DataAwsccQuicksightTopicDataSetsNamedEntities" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntities.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsNamedEntities: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntities = { ... }
```


### DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition = { ... }
```


### DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric = { ... }
```


### DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType = { ... }
```


### DataAwsccQuicksightTopicTags <a name="DataAwsccQuicksightTopicTags" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTags.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

const dataAwsccQuicksightTopicTags: dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightTopicConfigOptionsOutputReference <a name="DataAwsccQuicksightTopicConfigOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.qBusinessInsightsEnabled">qBusinessInsightsEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptions">DataAwsccQuicksightTopicConfigOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `qBusinessInsightsEnabled`<sup>Required</sup> <a name="qBusinessInsightsEnabled" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.qBusinessInsightsEnabled"></a>

```typescript
public readonly qBusinessInsightsEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicConfigOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptions">DataAwsccQuicksightTopicConfigOptions</a>

---


### DataAwsccQuicksightTopicCustomInstructionsOutputReference <a name="DataAwsccQuicksightTopicCustomInstructionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.customInstructionsString">customInstructionsString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructions">DataAwsccQuicksightTopicCustomInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customInstructionsString`<sup>Required</sup> <a name="customInstructionsString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.customInstructionsString"></a>

```typescript
public readonly customInstructionsString: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicCustomInstructions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructions">DataAwsccQuicksightTopicCustomInstructions</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.cellValue">cellValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms">DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cellValue`<sup>Required</sup> <a name="cellValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.cellValue"></a>

```typescript
public readonly cellValue: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms">DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.specifedOrder">specifedOrder</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.treatUndefinedSpecifiedValues">treatUndefinedSpecifiedValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.useOrdering">useOrdering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder">DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `specifedOrder`<sup>Required</sup> <a name="specifedOrder" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.specifedOrder"></a>

```typescript
public readonly specifedOrder: string[];
```

- *Type:* string[]

---

##### `treatUndefinedSpecifiedValues`<sup>Required</sup> <a name="treatUndefinedSpecifiedValues" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.treatUndefinedSpecifiedValues"></a>

```typescript
public readonly treatUndefinedSpecifiedValues: string;
```

- *Type:* string

---

##### `useOrdering`<sup>Required</sup> <a name="useOrdering" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.useOrdering"></a>

```typescript
public readonly useOrdering: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder">DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.blankCellFormat">blankCellFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.currencySymbol">currencySymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.decimalSeparator">decimalSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.fractionDigits">fractionDigits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.groupingSeparator">groupingSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.negativeFormat">negativeFormat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.unitScaler">unitScaler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.useBlankCellFormat">useBlankCellFormat</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.useGrouping">useGrouping</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blankCellFormat`<sup>Required</sup> <a name="blankCellFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.blankCellFormat"></a>

```typescript
public readonly blankCellFormat: string;
```

- *Type:* string

---

##### `currencySymbol`<sup>Required</sup> <a name="currencySymbol" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.currencySymbol"></a>

```typescript
public readonly currencySymbol: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `decimalSeparator`<sup>Required</sup> <a name="decimalSeparator" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.decimalSeparator"></a>

```typescript
public readonly decimalSeparator: string;
```

- *Type:* string

---

##### `fractionDigits`<sup>Required</sup> <a name="fractionDigits" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.fractionDigits"></a>

```typescript
public readonly fractionDigits: number;
```

- *Type:* number

---

##### `groupingSeparator`<sup>Required</sup> <a name="groupingSeparator" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.groupingSeparator"></a>

```typescript
public readonly groupingSeparator: string;
```

- *Type:* string

---

##### `negativeFormat`<sup>Required</sup> <a name="negativeFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.negativeFormat"></a>

```typescript
public readonly negativeFormat: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `unitScaler`<sup>Required</sup> <a name="unitScaler" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.unitScaler"></a>

```typescript
public readonly unitScaler: string;
```

- *Type:* string

---

##### `useBlankCellFormat`<sup>Required</sup> <a name="useBlankCellFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.useBlankCellFormat"></a>

```typescript
public readonly useBlankCellFormat: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useGrouping`<sup>Required</sup> <a name="useGrouping" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.useGrouping"></a>

```typescript
public readonly useGrouping: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.displayFormat">displayFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.displayFormatOptions">displayFormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayFormat`<sup>Required</sup> <a name="displayFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.displayFormat"></a>

```typescript
public readonly displayFormat: string;
```

- *Type:* string

---

##### `displayFormatOptions`<sup>Required</sup> <a name="displayFormatOptions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.displayFormatOptions"></a>

```typescript
public readonly displayFormatOptions: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsList <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.allowedAggregations">allowedAggregations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.calculatedFieldDescription">calculatedFieldDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.calculatedFieldName">calculatedFieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.calculatedFieldSynonyms">calculatedFieldSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.cellValueSynonyms">cellValueSynonyms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList">DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.columnDataRole">columnDataRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.comparativeOrder">comparativeOrder</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.defaultFormatting">defaultFormatting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.disableIndexing">disableIndexing</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.isIncludedInTopic">isIncludedInTopic</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.neverAggregateInFilter">neverAggregateInFilter</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.nonAdditive">nonAdditive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.notAllowedAggregations">notAllowedAggregations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.semanticType">semanticType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.timeGranularity">timeGranularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFields">DataAwsccQuicksightTopicDataSetsCalculatedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `allowedAggregations`<sup>Required</sup> <a name="allowedAggregations" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.allowedAggregations"></a>

```typescript
public readonly allowedAggregations: string[];
```

- *Type:* string[]

---

##### `calculatedFieldDescription`<sup>Required</sup> <a name="calculatedFieldDescription" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.calculatedFieldDescription"></a>

```typescript
public readonly calculatedFieldDescription: string;
```

- *Type:* string

---

##### `calculatedFieldName`<sup>Required</sup> <a name="calculatedFieldName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.calculatedFieldName"></a>

```typescript
public readonly calculatedFieldName: string;
```

- *Type:* string

---

##### `calculatedFieldSynonyms`<sup>Required</sup> <a name="calculatedFieldSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.calculatedFieldSynonyms"></a>

```typescript
public readonly calculatedFieldSynonyms: string[];
```

- *Type:* string[]

---

##### `cellValueSynonyms`<sup>Required</sup> <a name="cellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.cellValueSynonyms"></a>

```typescript
public readonly cellValueSynonyms: DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList">DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList</a>

---

##### `columnDataRole`<sup>Required</sup> <a name="columnDataRole" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.columnDataRole"></a>

```typescript
public readonly columnDataRole: string;
```

- *Type:* string

---

##### `comparativeOrder`<sup>Required</sup> <a name="comparativeOrder" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.comparativeOrder"></a>

```typescript
public readonly comparativeOrder: DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference</a>

---

##### `defaultFormatting`<sup>Required</sup> <a name="defaultFormatting" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.defaultFormatting"></a>

```typescript
public readonly defaultFormatting: DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference</a>

---

##### `disableIndexing`<sup>Required</sup> <a name="disableIndexing" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.disableIndexing"></a>

```typescript
public readonly disableIndexing: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `isIncludedInTopic`<sup>Required</sup> <a name="isIncludedInTopic" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.isIncludedInTopic"></a>

```typescript
public readonly isIncludedInTopic: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `neverAggregateInFilter`<sup>Required</sup> <a name="neverAggregateInFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.neverAggregateInFilter"></a>

```typescript
public readonly neverAggregateInFilter: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nonAdditive`<sup>Required</sup> <a name="nonAdditive" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.nonAdditive"></a>

```typescript
public readonly nonAdditive: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `notAllowedAggregations`<sup>Required</sup> <a name="notAllowedAggregations" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.notAllowedAggregations"></a>

```typescript
public readonly notAllowedAggregations: string[];
```

- *Type:* string[]

---

##### `semanticType`<sup>Required</sup> <a name="semanticType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.semanticType"></a>

```typescript
public readonly semanticType: DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference</a>

---

##### `timeGranularity`<sup>Required</sup> <a name="timeGranularity" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.timeGranularity"></a>

```typescript
public readonly timeGranularity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsCalculatedFields;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFields">DataAwsccQuicksightTopicDataSetsCalculatedFields</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.falseyCellValue">falseyCellValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.falseyCellValueSynonyms">falseyCellValueSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.subTypeName">subTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.truthyCellValue">truthyCellValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.truthyCellValueSynonyms">truthyCellValueSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.typeParameters">typeParameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType">DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `falseyCellValue`<sup>Required</sup> <a name="falseyCellValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.falseyCellValue"></a>

```typescript
public readonly falseyCellValue: string;
```

- *Type:* string

---

##### `falseyCellValueSynonyms`<sup>Required</sup> <a name="falseyCellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.falseyCellValueSynonyms"></a>

```typescript
public readonly falseyCellValueSynonyms: string[];
```

- *Type:* string[]

---

##### `subTypeName`<sup>Required</sup> <a name="subTypeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.subTypeName"></a>

```typescript
public readonly subTypeName: string;
```

- *Type:* string

---

##### `truthyCellValue`<sup>Required</sup> <a name="truthyCellValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.truthyCellValue"></a>

```typescript
public readonly truthyCellValue: string;
```

- *Type:* string

---

##### `truthyCellValueSynonyms`<sup>Required</sup> <a name="truthyCellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.truthyCellValueSynonyms"></a>

```typescript
public readonly truthyCellValueSynonyms: string[];
```

- *Type:* string[]

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `typeParameters`<sup>Required</sup> <a name="typeParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.typeParameters"></a>

```typescript
public readonly typeParameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType">DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList <a name="DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.cellValue">cellValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms">DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cellValue`<sup>Required</sup> <a name="cellValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.cellValue"></a>

```typescript
public readonly cellValue: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms">DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.specifedOrder">specifedOrder</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.treatUndefinedSpecifiedValues">treatUndefinedSpecifiedValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.useOrdering">useOrdering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder">DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `specifedOrder`<sup>Required</sup> <a name="specifedOrder" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.specifedOrder"></a>

```typescript
public readonly specifedOrder: string[];
```

- *Type:* string[]

---

##### `treatUndefinedSpecifiedValues`<sup>Required</sup> <a name="treatUndefinedSpecifiedValues" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.treatUndefinedSpecifiedValues"></a>

```typescript
public readonly treatUndefinedSpecifiedValues: string;
```

- *Type:* string

---

##### `useOrdering`<sup>Required</sup> <a name="useOrdering" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.useOrdering"></a>

```typescript
public readonly useOrdering: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder">DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.blankCellFormat">blankCellFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.currencySymbol">currencySymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.decimalSeparator">decimalSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.fractionDigits">fractionDigits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.groupingSeparator">groupingSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.negativeFormat">negativeFormat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.unitScaler">unitScaler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.useBlankCellFormat">useBlankCellFormat</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.useGrouping">useGrouping</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blankCellFormat`<sup>Required</sup> <a name="blankCellFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.blankCellFormat"></a>

```typescript
public readonly blankCellFormat: string;
```

- *Type:* string

---

##### `currencySymbol`<sup>Required</sup> <a name="currencySymbol" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.currencySymbol"></a>

```typescript
public readonly currencySymbol: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `decimalSeparator`<sup>Required</sup> <a name="decimalSeparator" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.decimalSeparator"></a>

```typescript
public readonly decimalSeparator: string;
```

- *Type:* string

---

##### `fractionDigits`<sup>Required</sup> <a name="fractionDigits" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.fractionDigits"></a>

```typescript
public readonly fractionDigits: number;
```

- *Type:* number

---

##### `groupingSeparator`<sup>Required</sup> <a name="groupingSeparator" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.groupingSeparator"></a>

```typescript
public readonly groupingSeparator: string;
```

- *Type:* string

---

##### `negativeFormat`<sup>Required</sup> <a name="negativeFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.negativeFormat"></a>

```typescript
public readonly negativeFormat: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `unitScaler`<sup>Required</sup> <a name="unitScaler" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.unitScaler"></a>

```typescript
public readonly unitScaler: string;
```

- *Type:* string

---

##### `useBlankCellFormat`<sup>Required</sup> <a name="useBlankCellFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.useBlankCellFormat"></a>

```typescript
public readonly useBlankCellFormat: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useGrouping`<sup>Required</sup> <a name="useGrouping" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.useGrouping"></a>

```typescript
public readonly useGrouping: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.displayFormat">displayFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.displayFormatOptions">displayFormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayFormat`<sup>Required</sup> <a name="displayFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.displayFormat"></a>

```typescript
public readonly displayFormat: string;
```

- *Type:* string

---

##### `displayFormatOptions`<sup>Required</sup> <a name="displayFormatOptions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.displayFormatOptions"></a>

```typescript
public readonly displayFormatOptions: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsList <a name="DataAwsccQuicksightTopicDataSetsColumnsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightTopicDataSetsColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsColumnsOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.allowedAggregations">allowedAggregations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.cellValueSynonyms">cellValueSynonyms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList">DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnDataRole">columnDataRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnDescription">columnDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnFriendlyName">columnFriendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnSynonyms">columnSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.comparativeOrder">comparativeOrder</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference">DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.defaultFormatting">defaultFormatting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.disableIndexing">disableIndexing</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.isIncludedInTopic">isIncludedInTopic</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.neverAggregateInFilter">neverAggregateInFilter</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.nonAdditive">nonAdditive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.notAllowedAggregations">notAllowedAggregations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.semanticType">semanticType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference">DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.timeGranularity">timeGranularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumns">DataAwsccQuicksightTopicDataSetsColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `allowedAggregations`<sup>Required</sup> <a name="allowedAggregations" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.allowedAggregations"></a>

```typescript
public readonly allowedAggregations: string[];
```

- *Type:* string[]

---

##### `cellValueSynonyms`<sup>Required</sup> <a name="cellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.cellValueSynonyms"></a>

```typescript
public readonly cellValueSynonyms: DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList">DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList</a>

---

##### `columnDataRole`<sup>Required</sup> <a name="columnDataRole" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnDataRole"></a>

```typescript
public readonly columnDataRole: string;
```

- *Type:* string

---

##### `columnDescription`<sup>Required</sup> <a name="columnDescription" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnDescription"></a>

```typescript
public readonly columnDescription: string;
```

- *Type:* string

---

##### `columnFriendlyName`<sup>Required</sup> <a name="columnFriendlyName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnFriendlyName"></a>

```typescript
public readonly columnFriendlyName: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `columnSynonyms`<sup>Required</sup> <a name="columnSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnSynonyms"></a>

```typescript
public readonly columnSynonyms: string[];
```

- *Type:* string[]

---

##### `comparativeOrder`<sup>Required</sup> <a name="comparativeOrder" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.comparativeOrder"></a>

```typescript
public readonly comparativeOrder: DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference">DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference</a>

---

##### `defaultFormatting`<sup>Required</sup> <a name="defaultFormatting" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.defaultFormatting"></a>

```typescript
public readonly defaultFormatting: DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference</a>

---

##### `disableIndexing`<sup>Required</sup> <a name="disableIndexing" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.disableIndexing"></a>

```typescript
public readonly disableIndexing: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isIncludedInTopic`<sup>Required</sup> <a name="isIncludedInTopic" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.isIncludedInTopic"></a>

```typescript
public readonly isIncludedInTopic: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `neverAggregateInFilter`<sup>Required</sup> <a name="neverAggregateInFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.neverAggregateInFilter"></a>

```typescript
public readonly neverAggregateInFilter: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nonAdditive`<sup>Required</sup> <a name="nonAdditive" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.nonAdditive"></a>

```typescript
public readonly nonAdditive: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `notAllowedAggregations`<sup>Required</sup> <a name="notAllowedAggregations" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.notAllowedAggregations"></a>

```typescript
public readonly notAllowedAggregations: string[];
```

- *Type:* string[]

---

##### `semanticType`<sup>Required</sup> <a name="semanticType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.semanticType"></a>

```typescript
public readonly semanticType: DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference">DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference</a>

---

##### `timeGranularity`<sup>Required</sup> <a name="timeGranularity" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.timeGranularity"></a>

```typescript
public readonly timeGranularity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsColumns;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumns">DataAwsccQuicksightTopicDataSetsColumns</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.falseyCellValue">falseyCellValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.falseyCellValueSynonyms">falseyCellValueSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.subTypeName">subTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.truthyCellValue">truthyCellValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.truthyCellValueSynonyms">truthyCellValueSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.typeParameters">typeParameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticType">DataAwsccQuicksightTopicDataSetsColumnsSemanticType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `falseyCellValue`<sup>Required</sup> <a name="falseyCellValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.falseyCellValue"></a>

```typescript
public readonly falseyCellValue: string;
```

- *Type:* string

---

##### `falseyCellValueSynonyms`<sup>Required</sup> <a name="falseyCellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.falseyCellValueSynonyms"></a>

```typescript
public readonly falseyCellValueSynonyms: string[];
```

- *Type:* string[]

---

##### `subTypeName`<sup>Required</sup> <a name="subTypeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.subTypeName"></a>

```typescript
public readonly subTypeName: string;
```

- *Type:* string

---

##### `truthyCellValue`<sup>Required</sup> <a name="truthyCellValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.truthyCellValue"></a>

```typescript
public readonly truthyCellValue: string;
```

- *Type:* string

---

##### `truthyCellValueSynonyms`<sup>Required</sup> <a name="truthyCellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.truthyCellValueSynonyms"></a>

```typescript
public readonly truthyCellValueSynonyms: string[];
```

- *Type:* string[]

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `typeParameters`<sup>Required</sup> <a name="typeParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.typeParameters"></a>

```typescript
public readonly typeParameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsColumnsSemanticType;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticType">DataAwsccQuicksightTopicDataSetsColumnsSemanticType</a>

---


### DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference <a name="DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.datasetRowDateGranularity">datasetRowDateGranularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.defaultDateColumnName">defaultDateColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregation">DataAwsccQuicksightTopicDataSetsDataAggregation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetRowDateGranularity`<sup>Required</sup> <a name="datasetRowDateGranularity" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.datasetRowDateGranularity"></a>

```typescript
public readonly datasetRowDateGranularity: string;
```

- *Type:* string

---

##### `defaultDateColumnName`<sup>Required</sup> <a name="defaultDateColumnName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.defaultDateColumnName"></a>

```typescript
public readonly defaultDateColumnName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsDataAggregation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregation">DataAwsccQuicksightTopicDataSetsDataAggregation</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.valueList">valueList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueList`<sup>Required</sup> <a name="valueList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.valueList"></a>

```typescript
public readonly valueList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.collectiveConstant">collectiveConstant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.constantType">constantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.singularConstant">singularConstant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectiveConstant`<sup>Required</sup> <a name="collectiveConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.collectiveConstant"></a>

```typescript
public readonly collectiveConstant: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference</a>

---

##### `constantType`<sup>Required</sup> <a name="constantType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.constantType"></a>

```typescript
public readonly constantType: string;
```

- *Type:* string

---

##### `singularConstant`<sup>Required</sup> <a name="singularConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.singularConstant"></a>

```typescript
public readonly singularConstant: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.categoryFilterFunction">categoryFilterFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.categoryFilterType">categoryFilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.constant">constant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.inverse">inverse</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryFilterFunction`<sup>Required</sup> <a name="categoryFilterFunction" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.categoryFilterFunction"></a>

```typescript
public readonly categoryFilterFunction: string;
```

- *Type:* string

---

##### `categoryFilterType`<sup>Required</sup> <a name="categoryFilterType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.categoryFilterType"></a>

```typescript
public readonly categoryFilterType: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.constant"></a>

```typescript
public readonly constant: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference</a>

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.inverse"></a>

```typescript
public readonly inverse: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.constantType">constantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.rangeConstant">rangeConstant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constantType`<sup>Required</sup> <a name="constantType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.constantType"></a>

```typescript
public readonly constantType: string;
```

- *Type:* string

---

##### `rangeConstant`<sup>Required</sup> <a name="rangeConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.rangeConstant"></a>

```typescript
public readonly rangeConstant: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.maximum">maximum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.minimum">minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.maximum"></a>

```typescript
public readonly maximum: string;
```

- *Type:* string

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.constant">constant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.inclusive">inclusive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.constant"></a>

```typescript
public readonly constant: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference</a>

---

##### `inclusive`<sup>Required</sup> <a name="inclusive" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.inclusive"></a>

```typescript
public readonly inclusive: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersList <a name="DataAwsccQuicksightTopicDataSetsFiltersList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightTopicDataSetsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.constantType">constantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.singularConstant">singularConstant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constantType`<sup>Required</sup> <a name="constantType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.constantType"></a>

```typescript
public readonly constantType: string;
```

- *Type:* string

---

##### `singularConstant`<sup>Required</sup> <a name="singularConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.singularConstant"></a>

```typescript
public readonly singularConstant: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.constant">constant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.constant"></a>

```typescript
public readonly constant: DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.constantType">constantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.rangeConstant">rangeConstant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constantType`<sup>Required</sup> <a name="constantType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.constantType"></a>

```typescript
public readonly constantType: string;
```

- *Type:* string

---

##### `rangeConstant`<sup>Required</sup> <a name="rangeConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.rangeConstant"></a>

```typescript
public readonly rangeConstant: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.maximum">maximum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.minimum">minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.maximum"></a>

```typescript
public readonly maximum: string;
```

- *Type:* string

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.minimum"></a>

```typescript
public readonly minimum: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.constant">constant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.inclusive">inclusive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.constant"></a>

```typescript
public readonly constant: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference</a>

---

##### `inclusive`<sup>Required</sup> <a name="inclusive" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.inclusive"></a>

```typescript
public readonly inclusive: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.categoryFilter">categoryFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.dateRangeFilter">dateRangeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterClass">filterClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterDescription">filterDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterName">filterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterSynonyms">filterSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.numericEqualityFilter">numericEqualityFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.numericRangeFilter">numericRangeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.operandFieldName">operandFieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.relativeDateFilter">relativeDateFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFilters">DataAwsccQuicksightTopicDataSetsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryFilter`<sup>Required</sup> <a name="categoryFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.categoryFilter"></a>

```typescript
public readonly categoryFilter: DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference</a>

---

##### `dateRangeFilter`<sup>Required</sup> <a name="dateRangeFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.dateRangeFilter"></a>

```typescript
public readonly dateRangeFilter: DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference</a>

---

##### `filterClass`<sup>Required</sup> <a name="filterClass" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterClass"></a>

```typescript
public readonly filterClass: string;
```

- *Type:* string

---

##### `filterDescription`<sup>Required</sup> <a name="filterDescription" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterDescription"></a>

```typescript
public readonly filterDescription: string;
```

- *Type:* string

---

##### `filterName`<sup>Required</sup> <a name="filterName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterName"></a>

```typescript
public readonly filterName: string;
```

- *Type:* string

---

##### `filterSynonyms`<sup>Required</sup> <a name="filterSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterSynonyms"></a>

```typescript
public readonly filterSynonyms: string[];
```

- *Type:* string[]

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `numericEqualityFilter`<sup>Required</sup> <a name="numericEqualityFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.numericEqualityFilter"></a>

```typescript
public readonly numericEqualityFilter: DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference</a>

---

##### `numericRangeFilter`<sup>Required</sup> <a name="numericRangeFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.numericRangeFilter"></a>

```typescript
public readonly numericRangeFilter: DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference</a>

---

##### `operandFieldName`<sup>Required</sup> <a name="operandFieldName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.operandFieldName"></a>

```typescript
public readonly operandFieldName: string;
```

- *Type:* string

---

##### `relativeDateFilter`<sup>Required</sup> <a name="relativeDateFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.relativeDateFilter"></a>

```typescript
public readonly relativeDateFilter: DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFilters">DataAwsccQuicksightTopicDataSetsFilters</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.constantType">constantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.singularConstant">singularConstant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constantType`<sup>Required</sup> <a name="constantType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.constantType"></a>

```typescript
public readonly constantType: string;
```

- *Type:* string

---

##### `singularConstant`<sup>Required</sup> <a name="singularConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.singularConstant"></a>

```typescript
public readonly singularConstant: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.constant">constant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.relativeDateFilterFunction">relativeDateFilterFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.timeGranularity">timeGranularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.constant"></a>

```typescript
public readonly constant: DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference</a>

---

##### `relativeDateFilterFunction`<sup>Required</sup> <a name="relativeDateFilterFunction" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.relativeDateFilterFunction"></a>

```typescript
public readonly relativeDateFilterFunction: string;
```

- *Type:* string

---

##### `timeGranularity`<sup>Required</sup> <a name="timeGranularity" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.timeGranularity"></a>

```typescript
public readonly timeGranularity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter</a>

---


### DataAwsccQuicksightTopicDataSetsList <a name="DataAwsccQuicksightTopicDataSetsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightTopicDataSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.aggregationFunctionParameters">aggregationFunctionParameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `aggregationFunctionParameters`<sup>Required</sup> <a name="aggregationFunctionParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.aggregationFunctionParameters"></a>

```typescript
public readonly aggregationFunctionParameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric</a>

---


### DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.propertyName">propertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.propertyRole">propertyRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.propertyUsage">propertyUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.metric"></a>

```typescript
public readonly metric: DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference</a>

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

---

##### `propertyRole`<sup>Required</sup> <a name="propertyRole" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.propertyRole"></a>

```typescript
public readonly propertyRole: string;
```

- *Type:* string

---

##### `propertyUsage`<sup>Required</sup> <a name="propertyUsage" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.propertyUsage"></a>

```typescript
public readonly propertyUsage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition</a>

---


### DataAwsccQuicksightTopicDataSetsNamedEntitiesList <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.entityDescription">entityDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.entityName">entityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.entitySynonyms">entitySynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.semanticEntityType">semanticEntityType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference">DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntities">DataAwsccQuicksightTopicDataSetsNamedEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.definition"></a>

```typescript
public readonly definition: DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList</a>

---

##### `entityDescription`<sup>Required</sup> <a name="entityDescription" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.entityDescription"></a>

```typescript
public readonly entityDescription: string;
```

- *Type:* string

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

---

##### `entitySynonyms`<sup>Required</sup> <a name="entitySynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.entitySynonyms"></a>

```typescript
public readonly entitySynonyms: string[];
```

- *Type:* string[]

---

##### `semanticEntityType`<sup>Required</sup> <a name="semanticEntityType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.semanticEntityType"></a>

```typescript
public readonly semanticEntityType: DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference">DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsNamedEntities;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntities">DataAwsccQuicksightTopicDataSetsNamedEntities</a>

---


### DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.subTypeName">subTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.typeParameters">typeParameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType">DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subTypeName`<sup>Required</sup> <a name="subTypeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.subTypeName"></a>

```typescript
public readonly subTypeName: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `typeParameters`<sup>Required</sup> <a name="typeParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.typeParameters"></a>

```typescript
public readonly typeParameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType">DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType</a>

---


### DataAwsccQuicksightTopicDataSetsOutputReference <a name="DataAwsccQuicksightTopicDataSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.calculatedFields">calculatedFields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList">DataAwsccQuicksightTopicDataSetsCalculatedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList">DataAwsccQuicksightTopicDataSetsColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.dataAggregation">dataAggregation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference">DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.datasetArn">datasetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.datasetDescription">datasetDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.datasetName">datasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList">DataAwsccQuicksightTopicDataSetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.namedEntities">namedEntities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList">DataAwsccQuicksightTopicDataSetsNamedEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSets">DataAwsccQuicksightTopicDataSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `calculatedFields`<sup>Required</sup> <a name="calculatedFields" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.calculatedFields"></a>

```typescript
public readonly calculatedFields: DataAwsccQuicksightTopicDataSetsCalculatedFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList">DataAwsccQuicksightTopicDataSetsCalculatedFieldsList</a>

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.columns"></a>

```typescript
public readonly columns: DataAwsccQuicksightTopicDataSetsColumnsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList">DataAwsccQuicksightTopicDataSetsColumnsList</a>

---

##### `dataAggregation`<sup>Required</sup> <a name="dataAggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.dataAggregation"></a>

```typescript
public readonly dataAggregation: DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference">DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference</a>

---

##### `datasetArn`<sup>Required</sup> <a name="datasetArn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.datasetArn"></a>

```typescript
public readonly datasetArn: string;
```

- *Type:* string

---

##### `datasetDescription`<sup>Required</sup> <a name="datasetDescription" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.datasetDescription"></a>

```typescript
public readonly datasetDescription: string;
```

- *Type:* string

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.filters"></a>

```typescript
public readonly filters: DataAwsccQuicksightTopicDataSetsFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList">DataAwsccQuicksightTopicDataSetsFiltersList</a>

---

##### `namedEntities`<sup>Required</sup> <a name="namedEntities" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.namedEntities"></a>

```typescript
public readonly namedEntities: DataAwsccQuicksightTopicDataSetsNamedEntitiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList">DataAwsccQuicksightTopicDataSetsNamedEntitiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicDataSets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSets">DataAwsccQuicksightTopicDataSets</a>

---


### DataAwsccQuicksightTopicTagsList <a name="DataAwsccQuicksightTopicTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightTopicTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightTopicTagsOutputReference <a name="DataAwsccQuicksightTopicTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightTopic } from '@cdktn/provider-awscc'

new dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTags">DataAwsccQuicksightTopicTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightTopicTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTags">DataAwsccQuicksightTopicTags</a>

---



