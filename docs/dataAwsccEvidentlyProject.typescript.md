# `dataAwsccEvidentlyProject` Submodule <a name="`dataAwsccEvidentlyProject` Submodule" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEvidentlyProject <a name="DataAwsccEvidentlyProject" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/evidently_project awscc_evidently_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.Initializer"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

new dataAwsccEvidentlyProject.DataAwsccEvidentlyProject(scope: Construct, id: string, config: DataAwsccEvidentlyProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig">DataAwsccEvidentlyProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig">DataAwsccEvidentlyProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEvidentlyProject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.isConstruct"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.isTerraformElement"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.isTerraformDataSource"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.generateConfigForImport"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEvidentlyProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEvidentlyProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEvidentlyProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/evidently_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEvidentlyProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.appConfigResource">appConfigResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference">DataAwsccEvidentlyProjectAppConfigResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.dataDelivery">dataDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference">DataAwsccEvidentlyProjectDataDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList">DataAwsccEvidentlyProjectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `appConfigResource`<sup>Required</sup> <a name="appConfigResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.appConfigResource"></a>

```typescript
public readonly appConfigResource: DataAwsccEvidentlyProjectAppConfigResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference">DataAwsccEvidentlyProjectAppConfigResourceOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataDelivery`<sup>Required</sup> <a name="dataDelivery" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.dataDelivery"></a>

```typescript
public readonly dataDelivery: DataAwsccEvidentlyProjectDataDeliveryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference">DataAwsccEvidentlyProjectDataDeliveryOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.tags"></a>

```typescript
public readonly tags: DataAwsccEvidentlyProjectTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList">DataAwsccEvidentlyProjectTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEvidentlyProjectAppConfigResource <a name="DataAwsccEvidentlyProjectAppConfigResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResource.Initializer"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

const dataAwsccEvidentlyProjectAppConfigResource: dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResource = { ... }
```


### DataAwsccEvidentlyProjectConfig <a name="DataAwsccEvidentlyProjectConfig" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.Initializer"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

const dataAwsccEvidentlyProjectConfig: dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/evidently_project#id DataAwsccEvidentlyProject#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEvidentlyProjectDataDelivery <a name="DataAwsccEvidentlyProjectDataDelivery" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDelivery.Initializer"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

const dataAwsccEvidentlyProjectDataDelivery: dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDelivery = { ... }
```


### DataAwsccEvidentlyProjectDataDeliveryS3 <a name="DataAwsccEvidentlyProjectDataDeliveryS3" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3.Initializer"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

const dataAwsccEvidentlyProjectDataDeliveryS3: dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3 = { ... }
```


### DataAwsccEvidentlyProjectTags <a name="DataAwsccEvidentlyProjectTags" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTags.Initializer"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

const dataAwsccEvidentlyProjectTags: dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEvidentlyProjectAppConfigResourceOutputReference <a name="DataAwsccEvidentlyProjectAppConfigResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

new dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResource">DataAwsccEvidentlyProjectAppConfigResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvidentlyProjectAppConfigResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectAppConfigResource">DataAwsccEvidentlyProjectAppConfigResource</a>

---


### DataAwsccEvidentlyProjectDataDeliveryOutputReference <a name="DataAwsccEvidentlyProjectDataDeliveryOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

new dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference">DataAwsccEvidentlyProjectDataDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDelivery">DataAwsccEvidentlyProjectDataDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.property.s3"></a>

```typescript
public readonly s3: DataAwsccEvidentlyProjectDataDeliveryS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference">DataAwsccEvidentlyProjectDataDeliveryS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvidentlyProjectDataDelivery;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDelivery">DataAwsccEvidentlyProjectDataDelivery</a>

---


### DataAwsccEvidentlyProjectDataDeliveryS3OutputReference <a name="DataAwsccEvidentlyProjectDataDeliveryS3OutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

new dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3">DataAwsccEvidentlyProjectDataDeliveryS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvidentlyProjectDataDeliveryS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectDataDeliveryS3">DataAwsccEvidentlyProjectDataDeliveryS3</a>

---


### DataAwsccEvidentlyProjectTagsList <a name="DataAwsccEvidentlyProjectTagsList" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.Initializer"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

new dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEvidentlyProjectTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEvidentlyProjectTagsOutputReference <a name="DataAwsccEvidentlyProjectTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvidentlyProject } from '@cdktn/provider-awscc'

new dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTags">DataAwsccEvidentlyProjectTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvidentlyProjectTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvidentlyProject.DataAwsccEvidentlyProjectTags">DataAwsccEvidentlyProjectTags</a>

---



