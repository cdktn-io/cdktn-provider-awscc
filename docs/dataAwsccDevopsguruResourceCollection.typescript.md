# `dataAwsccDevopsguruResourceCollection` Submodule <a name="`dataAwsccDevopsguruResourceCollection` Submodule" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDevopsguruResourceCollection <a name="DataAwsccDevopsguruResourceCollection" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsguru_resource_collection awscc_devopsguru_resource_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer"></a>

```typescript
import { dataAwsccDevopsguruResourceCollection } from '@cdktn/provider-awscc'

new dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection(scope: Construct, id: string, config: DataAwsccDevopsguruResourceCollectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig">DataAwsccDevopsguruResourceCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig">DataAwsccDevopsguruResourceCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDevopsguruResourceCollection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isConstruct"></a>

```typescript
import { dataAwsccDevopsguruResourceCollection } from '@cdktn/provider-awscc'

dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformElement"></a>

```typescript
import { dataAwsccDevopsguruResourceCollection } from '@cdktn/provider-awscc'

dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformDataSource"></a>

```typescript
import { dataAwsccDevopsguruResourceCollection } from '@cdktn/provider-awscc'

dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.generateConfigForImport"></a>

```typescript
import { dataAwsccDevopsguruResourceCollection } from '@cdktn/provider-awscc'

dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDevopsguruResourceCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDevopsguruResourceCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDevopsguruResourceCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDevopsguruResourceCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.resourceCollectionFilter">resourceCollectionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.resourceCollectionType">resourceCollectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `resourceCollectionFilter`<sup>Required</sup> <a name="resourceCollectionFilter" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.resourceCollectionFilter"></a>

```typescript
public readonly resourceCollectionFilter: DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference</a>

---

##### `resourceCollectionType`<sup>Required</sup> <a name="resourceCollectionType" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.resourceCollectionType"></a>

```typescript
public readonly resourceCollectionType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDevopsguruResourceCollectionConfig <a name="DataAwsccDevopsguruResourceCollectionConfig" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.Initializer"></a>

```typescript
import { dataAwsccDevopsguruResourceCollection } from '@cdktn/provider-awscc'

const dataAwsccDevopsguruResourceCollectionConfig: dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsguru_resource_collection#id DataAwsccDevopsguruResourceCollection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDevopsguruResourceCollectionResourceCollectionFilter <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilter" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilter.Initializer"></a>

```typescript
import { dataAwsccDevopsguruResourceCollection } from '@cdktn/provider-awscc'

const dataAwsccDevopsguruResourceCollectionResourceCollectionFilter: dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilter = { ... }
```


### DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation.Initializer"></a>

```typescript
import { dataAwsccDevopsguruResourceCollection } from '@cdktn/provider-awscc'

const dataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation: dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation = { ... }
```


### DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags.Initializer"></a>

```typescript
import { dataAwsccDevopsguruResourceCollection } from '@cdktn/provider-awscc'

const dataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags: dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsguruResourceCollection } from '@cdktn/provider-awscc'

new dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames">stackNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stackNames`<sup>Required</sup> <a name="stackNames" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames"></a>

```typescript
public readonly stackNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---


### DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsguruResourceCollection } from '@cdktn/provider-awscc'

new dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation">cloudformation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilter">DataAwsccDevopsguruResourceCollectionResourceCollectionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudformation`<sup>Required</sup> <a name="cloudformation" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation"></a>

```typescript
public readonly cloudformation: DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsguruResourceCollectionResourceCollectionFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilter">DataAwsccDevopsguruResourceCollectionResourceCollectionFilter</a>

---


### DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer"></a>

```typescript
import { dataAwsccDevopsguruResourceCollection } from '@cdktn/provider-awscc'

new dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDevopsguruResourceCollection } from '@cdktn/provider-awscc'

new dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey">appBoundaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues">tagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appBoundaryKey`<sup>Required</sup> <a name="appBoundaryKey" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey"></a>

```typescript
public readonly appBoundaryKey: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags</a>

---



