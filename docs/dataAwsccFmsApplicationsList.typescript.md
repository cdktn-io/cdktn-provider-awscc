# `dataAwsccFmsApplicationsList` Submodule <a name="`dataAwsccFmsApplicationsList` Submodule" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFmsApplicationsList <a name="DataAwsccFmsApplicationsList" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/fms_applications_list awscc_fms_applications_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.Initializer"></a>

```typescript
import { dataAwsccFmsApplicationsList } from '@cdktn/provider-awscc'

new dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList(scope: Construct, id: string, config: DataAwsccFmsApplicationsListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig">DataAwsccFmsApplicationsListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig">DataAwsccFmsApplicationsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccFmsApplicationsList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.isConstruct"></a>

```typescript
import { dataAwsccFmsApplicationsList } from '@cdktn/provider-awscc'

dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.isTerraformElement"></a>

```typescript
import { dataAwsccFmsApplicationsList } from '@cdktn/provider-awscc'

dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.isTerraformDataSource"></a>

```typescript
import { dataAwsccFmsApplicationsList } from '@cdktn/provider-awscc'

dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.generateConfigForImport"></a>

```typescript
import { dataAwsccFmsApplicationsList } from '@cdktn/provider-awscc'

dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccFmsApplicationsList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccFmsApplicationsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccFmsApplicationsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/fms_applications_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFmsApplicationsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.appsList">appsList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList">DataAwsccFmsApplicationsListAppsListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.lastUpdateTime">lastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.listId">listId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.listName">listName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList">DataAwsccFmsApplicationsListTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `appsList`<sup>Required</sup> <a name="appsList" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.appsList"></a>

```typescript
public readonly appsList: DataAwsccFmsApplicationsListAppsListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList">DataAwsccFmsApplicationsListAppsListStructList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.lastUpdateTime"></a>

```typescript
public readonly lastUpdateTime: string;
```

- *Type:* string

---

##### `listId`<sup>Required</sup> <a name="listId" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.listId"></a>

```typescript
public readonly listId: string;
```

- *Type:* string

---

##### `listName`<sup>Required</sup> <a name="listName" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.listName"></a>

```typescript
public readonly listName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.tags"></a>

```typescript
public readonly tags: DataAwsccFmsApplicationsListTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList">DataAwsccFmsApplicationsListTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFmsApplicationsListAppsListStruct <a name="DataAwsccFmsApplicationsListAppsListStruct" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStruct.Initializer"></a>

```typescript
import { dataAwsccFmsApplicationsList } from '@cdktn/provider-awscc'

const dataAwsccFmsApplicationsListAppsListStruct: dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStruct = { ... }
```


### DataAwsccFmsApplicationsListConfig <a name="DataAwsccFmsApplicationsListConfig" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.Initializer"></a>

```typescript
import { dataAwsccFmsApplicationsList } from '@cdktn/provider-awscc'

const dataAwsccFmsApplicationsListConfig: dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/fms_applications_list#id DataAwsccFmsApplicationsList#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFmsApplicationsListTags <a name="DataAwsccFmsApplicationsListTags" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTags.Initializer"></a>

```typescript
import { dataAwsccFmsApplicationsList } from '@cdktn/provider-awscc'

const dataAwsccFmsApplicationsListTags: dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFmsApplicationsListAppsListStructList <a name="DataAwsccFmsApplicationsListAppsListStructList" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.Initializer"></a>

```typescript
import { dataAwsccFmsApplicationsList } from '@cdktn/provider-awscc'

new dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.get"></a>

```typescript
public get(index: number): DataAwsccFmsApplicationsListAppsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccFmsApplicationsListAppsListStructOutputReference <a name="DataAwsccFmsApplicationsListAppsListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccFmsApplicationsList } from '@cdktn/provider-awscc'

new dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStruct">DataAwsccFmsApplicationsListAppsListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFmsApplicationsListAppsListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListAppsListStruct">DataAwsccFmsApplicationsListAppsListStruct</a>

---


### DataAwsccFmsApplicationsListTagsList <a name="DataAwsccFmsApplicationsListTagsList" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.Initializer"></a>

```typescript
import { dataAwsccFmsApplicationsList } from '@cdktn/provider-awscc'

new dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.get"></a>

```typescript
public get(index: number): DataAwsccFmsApplicationsListTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccFmsApplicationsListTagsOutputReference <a name="DataAwsccFmsApplicationsListTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccFmsApplicationsList } from '@cdktn/provider-awscc'

new dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTags">DataAwsccFmsApplicationsListTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFmsApplicationsListTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFmsApplicationsList.DataAwsccFmsApplicationsListTags">DataAwsccFmsApplicationsListTags</a>

---



