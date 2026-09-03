# `dataAwsccElementalinferenceFeed` Submodule <a name="`dataAwsccElementalinferenceFeed` Submodule" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElementalinferenceFeed <a name="DataAwsccElementalinferenceFeed" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elementalinference_feed awscc_elementalinference_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

new dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed(scope: Construct, id: string, config: DataAwsccElementalinferenceFeedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig">DataAwsccElementalinferenceFeedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig">DataAwsccElementalinferenceFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElementalinferenceFeed resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isConstruct"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformElement"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformDataSource"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccElementalinferenceFeed resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElementalinferenceFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElementalinferenceFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elementalinference_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElementalinferenceFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.accessRoleArn">accessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.dataEndpoints">dataEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.feedId">feedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList">DataAwsccElementalinferenceFeedOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessRoleArn`<sup>Required</sup> <a name="accessRoleArn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.accessRoleArn"></a>

```typescript
public readonly accessRoleArn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataEndpoints`<sup>Required</sup> <a name="dataEndpoints" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.dataEndpoints"></a>

```typescript
public readonly dataEndpoints: string[];
```

- *Type:* string[]

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.feedId"></a>

```typescript
public readonly feedId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.outputs"></a>

```typescript
public readonly outputs: DataAwsccElementalinferenceFeedOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList">DataAwsccElementalinferenceFeedOutputsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElementalinferenceFeedConfig <a name="DataAwsccElementalinferenceFeedConfig" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

const dataAwsccElementalinferenceFeedConfig: dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elementalinference_feed#id DataAwsccElementalinferenceFeed#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElementalinferenceFeedOutputs <a name="DataAwsccElementalinferenceFeedOutputs" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputs.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

const dataAwsccElementalinferenceFeedOutputs: dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputs = { ... }
```


### DataAwsccElementalinferenceFeedOutputsOutputConfig <a name="DataAwsccElementalinferenceFeedOutputsOutputConfig" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfig.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

const dataAwsccElementalinferenceFeedOutputsOutputConfig: dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfig = { ... }
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigClipping <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigClipping" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

const dataAwsccElementalinferenceFeedOutputsOutputConfigClipping: dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping = { ... }
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

const dataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration: dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration = { ... }
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigCropping <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigCropping" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCropping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCropping.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

const dataAwsccElementalinferenceFeedOutputsOutputConfigCropping: dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCropping = { ... }
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

const dataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups: dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups = { ... }
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

const dataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling: dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling = { ... }
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

const dataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio: dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElementalinferenceFeedOutputsList <a name="DataAwsccElementalinferenceFeedOutputsList" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

new dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.get"></a>

```typescript
public get(index: number): DataAwsccElementalinferenceFeedOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

new dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fixtureId">fixtureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixtureId`<sup>Required</sup> <a name="fixtureId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fixtureId"></a>

```typescript
public readonly fixtureId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

new dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata">callbackMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.dataSourceConfiguration">dataSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping">DataAwsccElementalinferenceFeedOutputsOutputConfigClipping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `callbackMetadata`<sup>Required</sup> <a name="callbackMetadata" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata"></a>

```typescript
public readonly callbackMetadata: string;
```

- *Type:* string

---

##### `dataSourceConfiguration`<sup>Required</sup> <a name="dataSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.dataSourceConfiguration"></a>

```typescript
public readonly dataSourceConfiguration: DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElementalinferenceFeedOutputsOutputConfigClipping;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping">DataAwsccElementalinferenceFeedOutputsOutputConfigClipping</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

new dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.templateGroups">templateGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList">DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCropping">DataAwsccElementalinferenceFeedOutputsOutputConfigCropping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateGroups`<sup>Required</sup> <a name="templateGroups" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.templateGroups"></a>

```typescript
public readonly templateGroups: DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList">DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElementalinferenceFeedOutputsOutputConfigCropping;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCropping">DataAwsccElementalinferenceFeedOutputsOutputConfigCropping</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

new dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.get"></a>

```typescript
public get(index: number): DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

new dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.templateUris">templateUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups">DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `templateUris`<sup>Required</sup> <a name="templateUris" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.templateUris"></a>

```typescript
public readonly templateUris: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups">DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

new dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping">clipping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping">cropping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling">subtitling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfig">DataAwsccElementalinferenceFeedOutputsOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clipping`<sup>Required</sup> <a name="clipping" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping"></a>

```typescript
public readonly clipping: DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a>

---

##### `cropping`<sup>Required</sup> <a name="cropping" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping"></a>

```typescript
public readonly cropping: DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference</a>

---

##### `subtitling`<sup>Required</sup> <a name="subtitling" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling"></a>

```typescript
public readonly subtitling: DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElementalinferenceFeedOutputsOutputConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfig">DataAwsccElementalinferenceFeedOutputsOutputConfig</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

new dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

new dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio">aspectRatio</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary">dictionary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter">profanityFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aspectRatio`<sup>Required</sup> <a name="aspectRatio" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio"></a>

```typescript
public readonly aspectRatio: DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a>

---

##### `dictionary`<sup>Required</sup> <a name="dictionary" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary"></a>

```typescript
public readonly dictionary: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `profanityFilter`<sup>Required</sup> <a name="profanityFilter" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter"></a>

```typescript
public readonly profanityFilter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElementalinferenceFeed } from '@cdktn/provider-awscc'

new dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputs">DataAwsccElementalinferenceFeedOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.outputConfig"></a>

```typescript
public readonly outputConfig: DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElementalinferenceFeedOutputs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputs">DataAwsccElementalinferenceFeedOutputs</a>

---



