# `dataAwsccResourcegroupsGroup` Submodule <a name="`dataAwsccResourcegroupsGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccResourcegroupsGroup <a name="DataAwsccResourcegroupsGroup" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/resourcegroups_group awscc_resourcegroups_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

new dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup(scope: Construct, id: string, config: DataAwsccResourcegroupsGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig">DataAwsccResourcegroupsGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig">DataAwsccResourcegroupsGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccResourcegroupsGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.isConstruct"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.isTerraformElement"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccResourcegroupsGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccResourcegroupsGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccResourcegroupsGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/resourcegroups_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccResourcegroupsGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList">DataAwsccResourcegroupsGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.resourceQuery">resourceQuery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference">DataAwsccResourcegroupsGroupResourceQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList">DataAwsccResourcegroupsGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.configuration"></a>

```typescript
public readonly configuration: DataAwsccResourcegroupsGroupConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList">DataAwsccResourcegroupsGroupConfigurationList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceQuery`<sup>Required</sup> <a name="resourceQuery" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.resourceQuery"></a>

```typescript
public readonly resourceQuery: DataAwsccResourcegroupsGroupResourceQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference">DataAwsccResourcegroupsGroupResourceQueryOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.tags"></a>

```typescript
public readonly tags: DataAwsccResourcegroupsGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList">DataAwsccResourcegroupsGroupTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccResourcegroupsGroupConfig <a name="DataAwsccResourcegroupsGroupConfig" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

const dataAwsccResourcegroupsGroupConfig: dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/resourcegroups_group#id DataAwsccResourcegroupsGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccResourcegroupsGroupConfiguration <a name="DataAwsccResourcegroupsGroupConfiguration" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfiguration.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

const dataAwsccResourcegroupsGroupConfiguration: dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfiguration = { ... }
```


### DataAwsccResourcegroupsGroupConfigurationParameters <a name="DataAwsccResourcegroupsGroupConfigurationParameters" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParameters.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

const dataAwsccResourcegroupsGroupConfigurationParameters: dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParameters = { ... }
```


### DataAwsccResourcegroupsGroupResourceQuery <a name="DataAwsccResourcegroupsGroupResourceQuery" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQuery.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

const dataAwsccResourcegroupsGroupResourceQuery: dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQuery = { ... }
```


### DataAwsccResourcegroupsGroupResourceQueryQuery <a name="DataAwsccResourcegroupsGroupResourceQueryQuery" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQuery.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

const dataAwsccResourcegroupsGroupResourceQueryQuery: dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQuery = { ... }
```


### DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters <a name="DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

const dataAwsccResourcegroupsGroupResourceQueryQueryTagFilters: dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters = { ... }
```


### DataAwsccResourcegroupsGroupTags <a name="DataAwsccResourcegroupsGroupTags" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTags.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

const dataAwsccResourcegroupsGroupTags: dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccResourcegroupsGroupConfigurationList <a name="DataAwsccResourcegroupsGroupConfigurationList" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

new dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsccResourcegroupsGroupConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccResourcegroupsGroupConfigurationOutputReference <a name="DataAwsccResourcegroupsGroupConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

new dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList">DataAwsccResourcegroupsGroupConfigurationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfiguration">DataAwsccResourcegroupsGroupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DataAwsccResourcegroupsGroupConfigurationParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList">DataAwsccResourcegroupsGroupConfigurationParametersList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResourcegroupsGroupConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfiguration">DataAwsccResourcegroupsGroupConfiguration</a>

---


### DataAwsccResourcegroupsGroupConfigurationParametersList <a name="DataAwsccResourcegroupsGroupConfigurationParametersList" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

new dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.get"></a>

```typescript
public get(index: number): DataAwsccResourcegroupsGroupConfigurationParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccResourcegroupsGroupConfigurationParametersOutputReference <a name="DataAwsccResourcegroupsGroupConfigurationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

new dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParameters">DataAwsccResourcegroupsGroupConfigurationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResourcegroupsGroupConfigurationParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupConfigurationParameters">DataAwsccResourcegroupsGroupConfigurationParameters</a>

---


### DataAwsccResourcegroupsGroupResourceQueryOutputReference <a name="DataAwsccResourcegroupsGroupResourceQueryOutputReference" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

new dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference">DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQuery">DataAwsccResourcegroupsGroupResourceQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.property.query"></a>

```typescript
public readonly query: DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference">DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResourcegroupsGroupResourceQuery;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQuery">DataAwsccResourcegroupsGroupResourceQuery</a>

---


### DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference <a name="DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

new dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.property.resourceTypeFilters">resourceTypeFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.property.stackIdentifier">stackIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList">DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQuery">DataAwsccResourcegroupsGroupResourceQueryQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTypeFilters`<sup>Required</sup> <a name="resourceTypeFilters" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.property.resourceTypeFilters"></a>

```typescript
public readonly resourceTypeFilters: string[];
```

- *Type:* string[]

---

##### `stackIdentifier`<sup>Required</sup> <a name="stackIdentifier" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.property.stackIdentifier"></a>

```typescript
public readonly stackIdentifier: string;
```

- *Type:* string

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.property.tagFilters"></a>

```typescript
public readonly tagFilters: DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList">DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResourcegroupsGroupResourceQueryQuery;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQuery">DataAwsccResourcegroupsGroupResourceQueryQuery</a>

---


### DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList <a name="DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

new dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.get"></a>

```typescript
public get(index: number): DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference <a name="DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

new dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters">DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters">DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters</a>

---


### DataAwsccResourcegroupsGroupTagsList <a name="DataAwsccResourcegroupsGroupTagsList" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

new dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.get"></a>

```typescript
public get(index: number): DataAwsccResourcegroupsGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccResourcegroupsGroupTagsOutputReference <a name="DataAwsccResourcegroupsGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccResourcegroupsGroup } from '@cdktn/provider-awscc'

new dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTags">DataAwsccResourcegroupsGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResourcegroupsGroupTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResourcegroupsGroup.DataAwsccResourcegroupsGroupTags">DataAwsccResourcegroupsGroupTags</a>

---



