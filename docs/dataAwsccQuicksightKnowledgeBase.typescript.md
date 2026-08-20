# `dataAwsccQuicksightKnowledgeBase` Submodule <a name="`dataAwsccQuicksightKnowledgeBase` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightKnowledgeBase <a name="DataAwsccQuicksightKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/quicksight_knowledge_base awscc_quicksight_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

new dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase(scope: Construct, id: string, config: DataAwsccQuicksightKnowledgeBaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig">DataAwsccQuicksightKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig">DataAwsccQuicksightKnowledgeBaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightKnowledgeBase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isConstruct"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformElement"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformDataSource"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccQuicksightKnowledgeBase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQuicksightKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQuicksightKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/quicksight_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.accessControlConfiguration">accessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.documentCount">documentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailures">isEmailNotificationOptedForIngestionFailures</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseConfiguration">knowledgeBaseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseSizeBytes">knowledgeBaseSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.mediaExtractionConfiguration">mediaExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList">DataAwsccQuicksightKnowledgeBasePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.primaryOwnerArn">primaryOwnerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.primaryOwnerUsername">primaryOwnerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList">DataAwsccQuicksightKnowledgeBaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessControlConfiguration`<sup>Required</sup> <a name="accessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.accessControlConfiguration"></a>

```typescript
public readonly accessControlConfiguration: DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference</a>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `documentCount`<sup>Required</sup> <a name="documentCount" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.documentCount"></a>

```typescript
public readonly documentCount: number;
```

- *Type:* number

---

##### `isEmailNotificationOptedForIngestionFailures`<sup>Required</sup> <a name="isEmailNotificationOptedForIngestionFailures" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailures"></a>

```typescript
public readonly isEmailNotificationOptedForIngestionFailures: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseArn"></a>

```typescript
public readonly knowledgeBaseArn: string;
```

- *Type:* string

---

##### `knowledgeBaseConfiguration`<sup>Required</sup> <a name="knowledgeBaseConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseConfiguration"></a>

```typescript
public readonly knowledgeBaseConfiguration: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference</a>

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

---

##### `knowledgeBaseSizeBytes`<sup>Required</sup> <a name="knowledgeBaseSizeBytes" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseSizeBytes"></a>

```typescript
public readonly knowledgeBaseSizeBytes: number;
```

- *Type:* number

---

##### `mediaExtractionConfiguration`<sup>Required</sup> <a name="mediaExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.mediaExtractionConfiguration"></a>

```typescript
public readonly mediaExtractionConfiguration: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.permissions"></a>

```typescript
public readonly permissions: DataAwsccQuicksightKnowledgeBasePermissionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList">DataAwsccQuicksightKnowledgeBasePermissionsList</a>

---

##### `primaryOwnerArn`<sup>Required</sup> <a name="primaryOwnerArn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.primaryOwnerArn"></a>

```typescript
public readonly primaryOwnerArn: string;
```

- *Type:* string

---

##### `primaryOwnerUsername`<sup>Required</sup> <a name="primaryOwnerUsername" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.primaryOwnerUsername"></a>

```typescript
public readonly primaryOwnerUsername: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.tags"></a>

```typescript
public readonly tags: DataAwsccQuicksightKnowledgeBaseTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList">DataAwsccQuicksightKnowledgeBaseTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration <a name="DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

const dataAwsccQuicksightKnowledgeBaseAccessControlConfiguration: dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration = { ... }
```


### DataAwsccQuicksightKnowledgeBaseConfig <a name="DataAwsccQuicksightKnowledgeBaseConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

const dataAwsccQuicksightKnowledgeBaseConfig: dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/quicksight_knowledge_base#id DataAwsccQuicksightKnowledgeBase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration <a name="DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

const dataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration: dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration = { ... }
```


### DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration <a name="DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

const dataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration: dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration = { ... }
```


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

const dataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration: dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration = { ... }
```


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

const dataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration: dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration = { ... }
```


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

const dataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration: dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration = { ... }
```


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

const dataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration: dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration = { ... }
```


### DataAwsccQuicksightKnowledgeBasePermissions <a name="DataAwsccQuicksightKnowledgeBasePermissions" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

const dataAwsccQuicksightKnowledgeBasePermissions: dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions = { ... }
```


### DataAwsccQuicksightKnowledgeBaseTags <a name="DataAwsccQuicksightKnowledgeBaseTags" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

const dataAwsccQuicksightKnowledgeBaseTags: dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

new dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabled">isAclEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration">DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isAclEnabled`<sup>Required</sup> <a name="isAclEnabled" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabled"></a>

```typescript
public readonly isAclEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration">DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

new dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateConfiguration`<sup>Required</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfiguration"></a>

```typescript
public readonly templateConfiguration: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

new dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

new dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus">audioExtractionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioExtractionStatus`<sup>Required</sup> <a name="audioExtractionStatus" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus"></a>

```typescript
public readonly audioExtractionStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

new dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus">imageExtractionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageExtractionStatus`<sup>Required</sup> <a name="imageExtractionStatus" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus"></a>

```typescript
public readonly imageExtractionStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

new dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration">audioExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration">imageExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration">videoExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioExtractionConfiguration`<sup>Required</sup> <a name="audioExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration"></a>

```typescript
public readonly audioExtractionConfiguration: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a>

---

##### `imageExtractionConfiguration`<sup>Required</sup> <a name="imageExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration"></a>

```typescript
public readonly imageExtractionConfiguration: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a>

---

##### `videoExtractionConfiguration`<sup>Required</sup> <a name="videoExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration"></a>

```typescript
public readonly videoExtractionConfiguration: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

new dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus">videoExtractionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionType">videoExtractionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `videoExtractionStatus`<sup>Required</sup> <a name="videoExtractionStatus" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus"></a>

```typescript
public readonly videoExtractionStatus: string;
```

- *Type:* string

---

##### `videoExtractionType`<sup>Required</sup> <a name="videoExtractionType" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionType"></a>

```typescript
public readonly videoExtractionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBasePermissionsList <a name="DataAwsccQuicksightKnowledgeBasePermissionsList" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

new dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightKnowledgeBasePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightKnowledgeBasePermissionsOutputReference <a name="DataAwsccQuicksightKnowledgeBasePermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

new dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions">DataAwsccQuicksightKnowledgeBasePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightKnowledgeBasePermissions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions">DataAwsccQuicksightKnowledgeBasePermissions</a>

---


### DataAwsccQuicksightKnowledgeBaseTagsList <a name="DataAwsccQuicksightKnowledgeBaseTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

new dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightKnowledgeBaseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightKnowledgeBaseTagsOutputReference <a name="DataAwsccQuicksightKnowledgeBaseTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightKnowledgeBase } from '@cdktn/provider-awscc'

new dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags">DataAwsccQuicksightKnowledgeBaseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightKnowledgeBaseTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags">DataAwsccQuicksightKnowledgeBaseTags</a>

---



