# `dataAwsccEksAccessEntry` Submodule <a name="`dataAwsccEksAccessEntry` Submodule" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEksAccessEntry <a name="DataAwsccEksAccessEntry" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/eks_access_entry awscc_eks_access_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.Initializer"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

new dataAwsccEksAccessEntry.DataAwsccEksAccessEntry(scope: Construct, id: string, config: DataAwsccEksAccessEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig">DataAwsccEksAccessEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig">DataAwsccEksAccessEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEksAccessEntry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.isConstruct"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.isTerraformElement"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.isTerraformDataSource"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.generateConfigForImport"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEksAccessEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEksAccessEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEksAccessEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/eks_access_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEksAccessEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.accessEntryArn">accessEntryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.accessPolicies">accessPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList">DataAwsccEksAccessEntryAccessPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.kubernetesGroups">kubernetesGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.principalArn">principalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList">DataAwsccEksAccessEntryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessEntryArn`<sup>Required</sup> <a name="accessEntryArn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.accessEntryArn"></a>

```typescript
public readonly accessEntryArn: string;
```

- *Type:* string

---

##### `accessPolicies`<sup>Required</sup> <a name="accessPolicies" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.accessPolicies"></a>

```typescript
public readonly accessPolicies: DataAwsccEksAccessEntryAccessPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList">DataAwsccEksAccessEntryAccessPoliciesList</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `kubernetesGroups`<sup>Required</sup> <a name="kubernetesGroups" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.kubernetesGroups"></a>

```typescript
public readonly kubernetesGroups: string[];
```

- *Type:* string[]

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.principalArn"></a>

```typescript
public readonly principalArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.tags"></a>

```typescript
public readonly tags: DataAwsccEksAccessEntryTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList">DataAwsccEksAccessEntryTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEksAccessEntryAccessPolicies <a name="DataAwsccEksAccessEntryAccessPolicies" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPolicies.Initializer"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

const dataAwsccEksAccessEntryAccessPolicies: dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPolicies = { ... }
```


### DataAwsccEksAccessEntryAccessPoliciesAccessScope <a name="DataAwsccEksAccessEntryAccessPoliciesAccessScope" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScope.Initializer"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

const dataAwsccEksAccessEntryAccessPoliciesAccessScope: dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScope = { ... }
```


### DataAwsccEksAccessEntryConfig <a name="DataAwsccEksAccessEntryConfig" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.Initializer"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

const dataAwsccEksAccessEntryConfig: dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/eks_access_entry#id DataAwsccEksAccessEntry#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEksAccessEntryTags <a name="DataAwsccEksAccessEntryTags" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTags.Initializer"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

const dataAwsccEksAccessEntryTags: dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference <a name="DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.Initializer"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

new dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.property.namespaces">namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScope">DataAwsccEksAccessEntryAccessPoliciesAccessScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEksAccessEntryAccessPoliciesAccessScope;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScope">DataAwsccEksAccessEntryAccessPoliciesAccessScope</a>

---


### DataAwsccEksAccessEntryAccessPoliciesList <a name="DataAwsccEksAccessEntryAccessPoliciesList" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.Initializer"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

new dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.get"></a>

```typescript
public get(index: number): DataAwsccEksAccessEntryAccessPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEksAccessEntryAccessPoliciesOutputReference <a name="DataAwsccEksAccessEntryAccessPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

new dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.property.accessScope">accessScope</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference">DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPolicies">DataAwsccEksAccessEntryAccessPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessScope`<sup>Required</sup> <a name="accessScope" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.property.accessScope"></a>

```typescript
public readonly accessScope: DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference">DataAwsccEksAccessEntryAccessPoliciesAccessScopeOutputReference</a>

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEksAccessEntryAccessPolicies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryAccessPolicies">DataAwsccEksAccessEntryAccessPolicies</a>

---


### DataAwsccEksAccessEntryTagsList <a name="DataAwsccEksAccessEntryTagsList" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.Initializer"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

new dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEksAccessEntryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEksAccessEntryTagsOutputReference <a name="DataAwsccEksAccessEntryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEksAccessEntry } from '@cdktn/provider-awscc'

new dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTags">DataAwsccEksAccessEntryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEksAccessEntryTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksAccessEntry.DataAwsccEksAccessEntryTags">DataAwsccEksAccessEntryTags</a>

---



